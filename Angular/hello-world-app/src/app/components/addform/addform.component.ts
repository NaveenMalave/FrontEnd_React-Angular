import { Component } from '@angular/core';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent {
  n: string="";
  a :number=0;
  s : number=0;
  d:number=0;
  gender:string="";
  Emp=[
    {n:this.n,
    a:this.a,
    s:this.s,
    d:this.d,
    gender:this.gender}
  ];
  // constructor(){
  //   this.Emp.
  // }
add(){
  this.Emp.push({
    n:this.n,
    a:this.a,
    s:this.s,
    d:this.d,
    gender:this.gender
  });
 }
}
