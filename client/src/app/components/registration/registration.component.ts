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

  regForm = new FormGroup({
    'user_name': new FormControl('', [
      Validators.required
    ]),
    'user_email': new FormControl('', [
      Validators.required
    ]),
    'user_password': new FormControl('', [
      Validators.required
    ]),
    'user_confirm_password': new FormControl('', [
      Validators.required
    ]),
  });

  user = new User('Terr', 'terr@gmail.com', '', '', '');

  submitted = false;

  addUser() {
    this.submitted = true;
    console.log(this.user);
  }

  ngOnInit() {
  }
}
