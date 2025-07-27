import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-parrent-child',
  imports: [],
  templateUrl: './parrent-child.component.html',
  styleUrl: './parrent-child.component.css'
})
export class ParrentChildComponent {
  @Input() user:string=""  //@Input decorator is used to get data from parrent component
  @Input() city:string=""
}
