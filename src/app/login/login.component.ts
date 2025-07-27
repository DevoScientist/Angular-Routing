import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
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

  profileForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
    email: new FormControl()
  })

  onSubmit() {
    console.log("submit is called");

    console.log(this.profileForm.value);
  }

  setValue() {
    this.profileForm.setValue({
      name: 'peter',
      password: "321",
      email: "peter@test.com"
    })
  }



}
