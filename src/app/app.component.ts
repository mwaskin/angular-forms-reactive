import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
/* ACCESSING FormControl DATA
-- Use FormGroup.get() method
-- Pass (as a string) the name of the FormControl to access
-- Then access the properties of that control (.valid, .touched, etc.)
-- Can be used in template to add validation error messages with *ngIf directive
*/
/* GROUPING CONTROLS
-- group related controls by nesting a child FormGroup inside the main parent FormGroup
-- In template, wrap the grouped controls in a container and bind the formGroupName directive, passing it the name of the child FormGroup
-- Now the control is accessed by calling parentFG.childFG; for example, signupForm.get('userData.username')
*/
/* CREATING/USING AN ARRAY OF FormControls (FormArray)
-- Add a new control to FormGroup of type FormArray(), which takes an array of controls as an argument
-- In the template, wrap the section of the form with the FormArray in a container and sync it to the FormArray by binding the formArrayName directive
-- onAddHobby():
  -- when button is clicked, a new null control is created
  -- use FormGroup.get() method to receive the FormArray; must manually type-cast the result as a <FormArray>
    -- call .push() method to add the new control to the array
-- getControls()
  -- again, use .get() method and type cast it as a <FormArray> to get the hobbies FormArray object
  -- access the controls property on the FormArray object to get the array on controls (added by each button click)
-- Rendering and Syncing the Controls
  -- use *ngFor to render a div containing an input for each control added to the hobbies FormArray
  -- sync each input to its corresponding control in the FormArray by syncing its formControlName to it's index in the FormArray
    -- use property binding to bind it to be able to assign a variable (i) rather than a string (static) value
*/
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
}
