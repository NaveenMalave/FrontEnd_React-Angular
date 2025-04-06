import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppCalculatorComponent } from './components/app-calculator/app-calculator.component';
import { CounterComponent } from './components/counter/counter.component';
import { NgForOfComponent } from './components/ng-for-of/ng-for-of.component';
import { AddformComponent } from './components/addform/addform.component';
import { NgswitchDemoComponent } from './components/ngswitch-demo/ngswitch-demo.component';
import { GenderPipe } from './pipes/gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppCalculatorComponent,
    CounterComponent,
    NgForOfComponent,
    AddformComponent,
    NgswitchDemoComponent,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
