import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedUser = new BehaviorSubject<User | null> (null);

  private users = new BehaviorSubject<User[]>([
    {
      id: "1",
      name: '',
      email: '',
      isAdmin: false,
      password: '',
      cpf: '000-000-000-00',
      birthDate: '10/10/1990',
    }
  ]);
  
  urlBack = environment.urlBack;
  headers = {
    'Content-type': 'application/json'
  }

  constructor( 
    private httpClient: HttpClient,
  ) { }

  getUsers(): User[]{
    this.httpClient.get<User[]>(`${this.urlBack}/users`).subscribe(
      (users) => {
       this.users.next(users);
      });
      return this.users.getValue();
    // return this.users.getValue();
  }

  getLoggedUser(): User | null {
    const userStorage = sessionStorage.getItem('user');
    if(userStorage){
      this.loggedUser.next(JSON.parse(userStorage));
    }
    return this.loggedUser.getValue();
  }

  editLoggedUser(user: User | null){
    this.loggedUser.next(user);
  }

  getUsersStream(): Observable<User[]>{
    return this.users.asObservable();
  }

  getLoggedUserStream(): Observable<User | null>{
    return this.loggedUser.asObservable();
  }

  getDefaultUser(): User{
    return {
      id: "",
      name: '',
      email: '',
      isAdmin: false,
      password: '',
      cpf: '000-000-000-00',
      birthDate: '10/10/1990',
    };  
  }

  createUser(user: User){
    const body = JSON.stringify(user);
    this.httpClient.post<User>(`${this.urlBack}/users/create`, body, {headers: this.headers}).subscribe(
      (user) => {
        this.getUsers().push(user);
        this.users.next(this.getUsers())
      }
    );
  }

  removeUser(id: string){
    // this.users.next(this.getUsers().filter((u)=> u.id !== id));
    this.httpClient.delete<User>(`${this.urlBack}/users/remove/${id}`).subscribe(
      (user) =>{
        this.users.next(this.getUsers().filter((u) => u.id === id));
      });
    return this.users;
  }

  getUserById(id: string): User | undefined {
    // this.httpClient.get<User>(`${this.urlBack}/id/`)
    return this.getUsers().find((u) => u.id === id);
  }

  getUserByEmailAndPassword(email: string | undefined, password: string | undefined):Observable<User> {

    const body = { 
      email,
      password
    }
    return this.httpClient.post<User>(`${this.urlBack}/users/authenticate`, body, {headers: this.headers});
  }

  updateUser(user: User){
    const body = JSON.stringify(user);
    this.httpClient.put<User>(`${this.urlBack}/users/update/${user.id}`, body, {headers: this.headers}).subscribe(
      (user) => {
        this.users.getValue().push(user);
        this.users.next(this.getUsers());
      });
  }
}
