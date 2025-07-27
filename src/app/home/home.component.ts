import { ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // constructor(private router:Router){}

  // goToProfile(){
  //   this.router.navigate(['profile'], {queryParams: {name: 'Milky way'}})
  // }

  users = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com"
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com"
    },
    {
      id: 3,
      name: "Sam Brown",
      age: 22,
      email: "sam.brown@example.com"
    },
    {
      id: 4,
      name: "Lisa White",
      age: 40,
      email: "lisa.white@example.com"
    },
    {
      id: 5,
      name: "Mike Green",
      age: 30,
      email: "mike.green@example.com"
    }
  ]


}
