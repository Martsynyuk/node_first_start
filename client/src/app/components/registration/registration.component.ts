import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../models/user';
import { UserValidate } from '../../validations/user_validate';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  Errors = {
    'user_name': {
      'required': 'Name is required',
      'minlength': 'Name must be more 6 charset',
      'manlength': 'Name must be less 6 charset'
    },
    'user_email': {
      'required': 'Email is required',
      'email': 'Email is not valid'
    },
    'user_password': {
      'required': 'Password is required'
    },
    'user_confirm_password': {
      'required': 'Confirm password is required'
    }
  };
  user      = new User('', '', '', '');
  regForm   = new FormGroup(new UserValidate().regValid);
  submitted = false;

  valid = [];

  constructor() {
  }

  addUser() {
    this.valid = [];

    for (var formControlName in this.regForm.controls) {
      for (var validator in this.Errors[`${formControlName}`]) {
        if (this.regForm.controls[`${formControlName}`].hasError(`${validator}`)) {
          this.valid[`${formControlName}`] = this.Errors[`${formControlName}`][`${validator}`];
        }
      }
    }
    console.log(this.valid);
  }

  ngOnInit() {

  }
}
