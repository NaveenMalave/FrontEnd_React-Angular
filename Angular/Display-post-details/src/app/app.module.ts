import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { DisplayContentComponent } from './components/display-content/display-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    DisplayContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
