import { Component } from '@angular/core';

@Component({
  selector: 'ngswitch-demo',
  templateUrl: './ngswitch-demo.component.html',
  styleUrls: ['./ngswitch-demo.component.css']
})
export class NgswitchDemoComponent {
choice:number=1;
setChoice(value:number){
  this.choice=value;
}
}
