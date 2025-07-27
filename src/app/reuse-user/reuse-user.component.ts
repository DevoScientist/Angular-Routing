import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reuse-user',
  imports: [],
  templateUrl: './reuse-user.component.html',
  styleUrl: './reuse-user.component.css'
})
export class ReuseUserComponent {

  @Input() user:string=""

}
