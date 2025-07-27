import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // name = new FormControl('username') //with default value. otherwise is also fine
  // password = new FormControl('password')

  // displayValue(){
  //   console.log(this.name.value, this.password.value);
  // }

  // setValue(){
  //   this.name.setValue('harish')
  //   this.password.setValue('321456')
  // }

  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$';

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]), //Form Validation Included...
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern(this.emailPattern)])
  })

  onSubmit() {
    console.log("submit is called");

    console.log(this.profileForm.value);
  }

  
  public get name() {                          // Getters in reactive forms are used foe shortening the requirement of writing big expressions while using in code.
    return this.profileForm.get('name')        // Increases code Readability
  }

  public get password() {
    return this.profileForm.get('password')
  }  
  public get email() {
    return this.profileForm.get('email')
  }


  // setValue() {
  //   this.profileForm.setValue({
  //     name: 'peter',
  //     password: "321",
  //     email: "peter@test.com"
  //   })
  // }



}
