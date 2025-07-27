import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  // userName?:string | null='';

  // constructor(private route:ActivatedRoute){ }

  // ngOnInit():void{  // Automaticallu=y caled when the website is invoked
  //   // this.userName=this.route.snapshot.paramMap.get('name');
  //   // console.log(this.userName);

  //   //----------------method 2: using buttons------------------
  //   // this.route.queryParams.subscribe(params => {
  //   //   this.userName=params['name']
  //   // })

  //   //-----------------method 3: direct common data passing-----------------
  //   // this.route.data.subscribe(data=>{
  //   //   this.userName=data['name']
  //   //   console.log(data['name']);
      
  //   // })


  // }
}
