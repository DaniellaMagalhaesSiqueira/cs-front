import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users!: Array<User>;
  constructor(private userService: UserService) { 
    this.userService.getUsersStream().subscribe((users) =>{
      this.users = users.filter((u) => u.isAdmin === true && u.id !== "8f9d1da3-d0d8-4420-971e-7f5707a62ad2");
    });
  }

  ngOnInit(): void {

    this.users = this.userService.getUsers().filter((u) => u.isAdmin === true);
  }

}
