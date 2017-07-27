import { Component, OnInit } from '@angular/core';
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
    'terr@gmail.com',
    'Super Hot',
    'Weather Changer'
  ];

  user = new User('', '', '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit() {
  }
}
