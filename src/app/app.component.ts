import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ParrentChildComponent } from "./parrent-child/parrent-child.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ParrentChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = ''

  onUserChange(val:string){
    // this.userName=val
  }

}
