import {  NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookPgraphersComponent } from './book-pgraphers/book-pgraphers.component';
import { EventListComponent } from './event-list/event-list.component';
import { PhotographersListComponent } from './photographers-list/photographers-list.component';
import { UserComponent } from './user/user.component';
//import { UserBookingComponent } from './user-booking/user-booking.component';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';
import { AdmineventComponent } from './adminevent/adminevent.component';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';
import { AdminPhotolComponent } from './admin-photol/admin-photol.component';




@NgModule({
  declarations: [
    AppComponent,
    BookPgraphersComponent,
    EventListComponent,
    PhotographersListComponent,
    UserComponent,
    //UserBookingComponent,
    HomeComponent,
    FirstComponent,
    PaymentComponent,
    AdminComponent,
    AdmineventComponent,
    AdminBookingComponent,
    AdminPhotolComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'book-pgrapher',component:BookPgraphersComponent},
      {path:'event-list',component:EventListComponent},
      {path:'photographers-list',component:PhotographersListComponent},
      // {path:'',redirectTo:'/home',pathMatch:'full'},
      {path:'',redirectTo:'/first',pathMatch:'full'},
      {path:'user',component:UserComponent},
      {path:'home',component:HomeComponent},
      {path:'first',component:FirstComponent},
      {path:'payment',component:PaymentComponent},
      {path:'admin',component:AdminComponent},
      {path:'adminevent',component:AdmineventComponent},
      {path:'adminbooking',component:AdminBookingComponent},
      {path:'admin-photol',component:AdminPhotolComponent}
      
     // {path:'user-booking',component:UserBookingComponent}
  ]),
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
