import { Component } from '@angular/core';
import { AdminBooking } from '../AdminBooking';
import { AdminbookingserviceService } from '../adminbookingservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrl: './admin-booking.component.css'
})
export class AdminBookingComponent {





  constructor(private httpservice:AdminbookingserviceService,private router:Router){}
  bookings: any;
  model:any
  
  
ngOnInit()

  {this.httpservice.getAllBookingsDetails().subscribe(
    (response)=>{this.bookings=response},
    (error)=>{console.log(error)}
  );
  }
  getStoredUid():any{
    this.uid=sessionStorage.getItem("userId");
    return this.uid;
  }
  getStoredPname():any{
    this.photographerName=sessionStorage.getItem("photographerName");
    return this.photographerName;
  }
  uid=this.getStoredUid();
  photographerName= this.getStoredPname();
 /* update(bid:number,city:string,EventName:string,noOfDays:string)
  {
    this.model1=new
  

  }*/

  

  
  
  delete(bid:number)
  {this.httpservice.delete(bid).subscribe
    (
      (response:string)=>{
        this.model=response;
        console.log(this.model);
        if(this.model.indexOf('booking of user is deleted successfully')!=-1)
        alert('booking deleted successfuly')
      else
      document.write(this.model)
      },
      (error)=>{console.log(error)}
    );

  }

model1=new AdminBooking(0,'pune','birthday','2','sanjit',0);
m:any
    create()
    {
      this.httpservice.create(this.model1, this.model1.uid).subscribe(
      (response)=>{this.m=response;
        console.log(this.m);
        if(this.m.indexOf('applied new booking successfully') != -1)
          alert('Booking done successfully!')
        else
          console.log(this.m);},
      (error)=>{console.log(error)}
    );
    }
   /* create()
    {
      this.httpservice.create(this.model1,this.model1.uid).subscribe(
        (response)=>{console.log(response)}

      );
    }*/

  



  /*gotoeventlistpage()
  {
    this.router.navigate(['/event-list']);
   }*/
  
  
  // gotohomepagee()
  // {
    // this.router.navigate(['/home']);
  

  
// }


  }

