import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { AddContactDetailsComponent } from './components/add-contact-details/add-contact-details.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth-guard.guard';
import { LoginComponent } from './components/login/login.component';
import { leadingComment } from '@angular/compiler';
import { LeaveRouteGuard } from './guards/leave-route.guard';
import { AuthInterceptorService } from './services/auth-interceptor.service';

const routes : Routes =[
  {
    path:"contact-list",
    component: ContactListComponent,
    canActivate:[AuthGuard],
    children :[{
      path:"edit-contact/:id",
      component:EditContactComponent
    }]

  },
  {
    path:"add-contact-details",
    component : AddContactDetailsComponent,
    canDeactivate: [LeaveRouteGuard]
  },
  {
    path :"home/:id",
    component:ContactDetailsComponent
  },
  {
    path :"login",
    component: LoginComponent
  },
  {
    path : "edit-contact/:id",
    component:EditContactComponent
  },
  {
    path: '',
    redirectTo:'/home',
    pathMatch:'full'
    
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppContentComponent,
    ContactDetailsComponent,
    AddContactDetailsComponent,
    ContactListComponent,
    EditContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
 RouterModule.forRoot(routes)
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass: AuthInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
