import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

/* CREATING THE FORM GROUP IN TS
-- In app.module, import ReactiveFormsModule instead of FormsModule (for TD approach)
-- Declare a property of type FormGroup, which will hold the form created
-- In ngOnInit(), define the form as a new FormGroup instance
  -- FormGroup takes a JS object of FormControls
    -- FormControl is passed the default value for each control
*/
/* SYNCING THE FORM TO THE TEMPLATE
-- bind the template <form> to the TS FormGroup with [formGroup] selector (from FormGroupDirective), passing it the name of the FormGroup property in TS
-- sync the template inputs with their respective FormControl by binding the formControlName directive, passing it the name of the corresponding name of the FormControl in TS
*/
/* SUBMITTING THE FORM
-- Similar to TD approach
-- Bind (ngSubmit) event to <form> and pass submission handler method
-- Difference is that the form was defined in the component's TS class, so don't need to create and pass a local ref for the form to the handler
*/
/* VALIDATION
-- Bc it's not the TD approach, validators are not added as directives bound to the HTML elements
-- Validators array is added as an argument when initializing each FormControl (no array needed if just one Validator)
-- The validators are methods on the Validators class, imported from angular
-- The method for each validator is not called when passed; it's only referenced for Angular to call behind the scenes when checking the validation
*/
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('male'),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
