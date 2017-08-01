import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  myForm : FormGroup;
  constructor(){
    this.myForm = new FormGroup({

      "userName": new FormControl("Tom", Validators.required),
      "userEmail": new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
      ]),
      "userPhone": new FormControl()
    });
  }

  submit(){
    console.log(this.myForm);
  }

  ngOnInit() {
  }
}
