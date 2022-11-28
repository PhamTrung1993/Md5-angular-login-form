import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  // @ts-ignore
  accountForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.accountForm = new FormGroup({
      email: new FormControl('', [Validators.required,
        Validators.email]),
      password: new FormControl('')
    }, (c: AbstractControl) => {
      const bindedObject: Account = c.value;
      if (bindedObject.password !== 'trung') {
        return {passwordByTrung: true};
      } else {
        return null;
      }
    });
  }
}

interface Account {
  email: String;
  password: String;
}
