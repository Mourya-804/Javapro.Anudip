import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { BookserviceService } from '../bookservice.service';
import { Booking } from '../Booking';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  // constructor(private htppservice: UserserviceService, private router: Router) { }
  constructor(private httpservice:BookserviceService,private router:Router){}
  bookings: any;
  model:any
  ngOnInit()

  {this.httpservice.getAllBookingsDetails().subscribe(
    (response)=>{this.bookings=response},
    (error)=>{console.log(error)}
  );
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

  gotoeventlistpage()
  {
    this.router.navigate(['/event-list']);
   }
  
  gotohomepagee()
  {
    this.router.navigate(['/home']);
  }

  // model1=new Booking(0,'pune','birthday','2','sanjit',0);
// m:any
    // create()
    // {
      // this.httpservice.create(this.model1).subscribe(
      // (response)=>{this.m=response},
      // (error)=>{console.log(error)}
    // );

  }




