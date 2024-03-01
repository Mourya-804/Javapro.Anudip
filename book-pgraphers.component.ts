import { Component } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { response } from 'express';

import { Booking} from '../Booking';
import { window } from 'rxjs';
import { error } from 'node:console';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-pgraphers',
  templateUrl: './book-pgraphers.component.html',
  styleUrl: './book-pgraphers.component.css'
})
export class BookPgraphersComponent {
  constructor(private httpservice:BookserviceService,private router:Router){}
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
  /*update(bid:number,city:string,EventName:string,noOfDays:string)
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

model1=new Booking(0,'pune','birthday','2',this.photographerName,parseInt(this.uid));
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



  gotoeventlistpage()
  {
    this.router.navigate(['/event-list']);
   }
  
  
  gotohomepagee()
  {
    this.router.navigate(['/home']);
  }

  image1='../assets/images/camera2.jpg';
  image2='../assets/images/n2.jpg';
  image3='../assets/images/b1.jpg';
  image4='../assets/images/w1.jpg';
  image5='../assets/images/n2.jpg';
  image6='../assets/images/b2.jpg';
  image7='../assets/images/w2.jpg';
  image8='../assets/images/n3.jpg';
  image9='../assets/images/b3.jpg';
  image10='../assets/images/w3.jpg';
  image11='../assets/images/n4.jpg';
  image12='../assets/images/b4.jpg';
  image13='../assets/images/w4.jpg';
  image14='../assets/images/n5.jpg';
  image15='../assets/images/b5.jpg';
  image16='../assets/images/w5.jpg';
  image17='../assets/images/n6.jpg';
  image18='../assets/images/b6.jpg';
  image19='../assets/images/w6.jpg';
  image20='../assets/images/n7.jpg';
  image21='../assets/images/b7.jpg';
  image22='../assets/images/w7.jpg';
  image23='../assets/images/new.jpg';
}

