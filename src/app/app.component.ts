import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {isEmailExistValidator} from "./service/email-validator";
import {UserService} from "./service/user-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Angular Custom Async Validator Example';

  userForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.userForm = this.formBuilder.group({
      pseudo: new FormControl('XperTuto', Validators.required),
      name: new FormControl('Aouidane', Validators.required),
      email: new FormControl('',
        [Validators.required],
        [isEmailExistValidator(this.userService)]),
    });
  }

  adduser() {
    // call API
    console.log(this.userForm.getRawValue());
  }
}
