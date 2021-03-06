import { MatDialog } from '@angular/material/dialog';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user.model';

import { MustMatch } from 'src/app/shared/validators/string-validator.validator';
import { formatDate } from '@angular/common';
import * as moment from 'moment';
import { MessageDialogComponent } from 'src/app/shared/dialogs/message-dialog/message-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.scss'],
})
export class EditUserPageComponent implements OnInit {

  user = this.userService.getLoggedUser();

  editUserForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private dialog: MatDialog,
    private router: Router,
  ) {
    this.userService.getLoggedUserStream().subscribe((loggedUser) => {
      this.user = loggedUser;
    });

  }



  ngOnInit(): void {

    this.editUserForm = this.formBuilder.group({
      name: new FormControl(this.user!.name, [Validators.required]),
      email: new FormControl(this.user!.email, [Validators.required]),
      password: new FormControl(this.user!.password, [Validators.required]),
      confirmPassword: new FormControl(this.user!.password, [Validators.required]),
      cpf: new FormControl(this.user!.cpf),
      birthDate: new FormControl(formatDate(this.user!.birthDate, 'yyyy-MM-dd', 'en')),
    },
      {
        validator: MustMatch('password', 'confirmPassword')
      });
    console.log(moment(this.user!.birthDate).toDate());
    console.log(formatDate(this.user!.birthDate, 'yyyy-MM-dd', 'en'));
  }

  onSubmit() {
    console.log(this.user);
    const formValue = this.editUserForm.value;
    if(this.user){

      this.user.name = formValue.name;
      this.user.email = formValue.email;
      this.user.cpf = formValue.cpf;
      this.user.password = formValue.password;
      this.user.birthDate = formatDate(formValue.birthDate, 'yyyy-MM-dd', 'en');
      console.log(this.user);
      
      this.userService.updateUser(this.user);
      this.dialog.open(MessageDialogComponent, {
        data: {
          message: 'Por favor, fa??a novamente seu login.',
          titleMessage: 'Conta alterada com sucesso!'
        }
      });
      sessionStorage.clear();
      this.userService.editLoggedUser(null);
      this.router.navigateByUrl('/home');
    }
  }
}
