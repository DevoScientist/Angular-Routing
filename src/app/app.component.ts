import { Component } from '@angular/core';
import { ReuseUserComponent } from "./reuse-user/reuse-user.component";

@Component({
  selector: 'app-root',
  imports: [ReuseUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  users = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Hannah", "Ivan", "Julia"];


}
