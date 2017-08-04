import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors} from '@angular/forms';
import { User } from '../../models/user';
import { UserValidate } from '../../validations/user_validate';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  constructor() {

  }

  user      = new User('Terr', '', '', '');
  regForm   = new FormGroup(new UserValidate().regValid);
  submitted = false;

  addUser() {
    this.submitted = true;
    console.log(this.user);
  }

  ngOnInit() {
  }
}
