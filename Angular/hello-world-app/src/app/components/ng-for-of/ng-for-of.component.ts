import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-of',
  templateUrl: './ng-for-of.component.html',
  styleUrls: ['./ng-for-of.component.css']
})
export class NgForOfComponent {
  names=['John','deo','Jane','dude'];
  people=[
    {name:'Ramnath',age:25,city:'delhi',picture:'assets/13.JPG'},
    {name:'Ram',age:20,city:'delhi',picture:'assets/14.jpg'},
    {name:'Rakeesh',age:23,city:'delhi',picture:'assets/15.jpg'}
  ];
  deletePerson(i:number){
    this.people.splice(i,1);
  }
  getCssClass(age:number){
    return age<18;
  }
}
