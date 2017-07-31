import {Component, Input, OnInit} from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  userInfo = [
    'Terr',
    'Sass',
    'Wini',
    'Vet'
  ];

  test = '';

  user = new User('terr', 'terr@gmail.com', '', '', this.userInfo[2]);

  submitted = false;

  onSubmit() { this.submitted = true; }
  addUser() {
    console.log(this.user);
  }

  ngOnInit() {
  }
}
