import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  constructor() { }

  user = new User('Terr', '', '', '');

  regForm = new FormGroup({
    'user_name': new FormControl(this.user.name, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(16)
    ]),
    'user_email': new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    'user_password': new FormControl(this.user.email, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16)
    ]),
    'user_confirm_password': new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16)
    ]),
  });

  submitted = false;

  addUser() {
    this.submitted = true;
    console.log(this.user);
  }

  ngOnInit() {
  }
}
