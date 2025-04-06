import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './app-calculator.component.html',
  styleUrls: ['./app-calculator.component.css']
})
export class AppCalculatorComponent {
x: number=10;
y: number=20;
result?: number=0;
age? : number=18;
colSize :number=10;
addNumbers(){
  console.log("added numbers");
  this.result = this.x + this.y;
}

}
