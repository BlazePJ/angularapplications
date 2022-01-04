import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent {
  static ageLimitValidator(minAge: number, maxAge: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      // if control value is not null and is a number
      if (control.value !== null) {
        // return null  if it's in between the minAge and maxAge and is A valid Number
        return isNaN(control.value) || // checks if its a valid number
        control.value < minAge || // checks if its below the minimum age
          control.value > maxAge // checks if its above the maximum age
          ? { ageLimit: true } // return this incase of error
          : null; // there was not error
      }
      return null;
    };}
    
form = new FormGroup({
  name: new FormControl('',[Validators.required,Validators.minLength(3)]),
  email: new FormControl('',[Validators.required,Validators.email]),
  mobile: new FormControl('',[Validators.required]),
  age: new FormControl('',Validators.compose([RegisterComponent.ageLimitValidator(18, 60)])),
  event: new FormControl('',[Validators.required]),
});


get f(){
  return this.form.controls;
}
submit(){
  console.log(this.form.value);
}
}
