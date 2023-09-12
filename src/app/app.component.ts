import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

/* 
-- In app.module, import ReactiveFormsModule instead of FormsModule (for TD approach)
-- Declare a property of type FormGroup, which will hold the form created
-- In ngOnInit(), define the form as a new FormGroup instance
  -- FormGroup takes a JS object of FormControls
    -- FormControl is passed the default value for each control

*/
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null),
      gender: new FormControl('male'),
    });
  }
}
