"use strict";

import { FormControl, Validators} from '@angular/forms';

export class UserValidate {
  regValid = {
    'user_name': new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(16)
    ]),
    'user_email': new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    'user_password': new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16)
    ]),
    'user_confirm_password': new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16)
    ]),
  }
};
