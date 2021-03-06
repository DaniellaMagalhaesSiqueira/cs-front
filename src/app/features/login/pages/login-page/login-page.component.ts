
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/features/user/models/user.model';
import { UserService } from 'src/app/features/user/services/user.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    ) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[ Validators.required]),
  });
  

  ngOnInit(): void {
  }

  onSubmit(){
    const user = this.userService.getUserByEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).subscribe((user)=>{
      console.log(console.error());
      if(!user){
        this.error = true;  
      }else{
        sessionStorage.setItem('user', JSON.stringify(user));
        this.userService.editLoggedUser(user);
        console.log(this.userService.getLoggedUser());
        this.router.navigateByUrl('home');
      }
    });
    if(HttpErrorResponse){
      this.error = true;
    }
    console.log(user);
  }


}




