import { Component } from '@angular/core';
import { PhotographerslistserviceService } from '../photographerslistservice.service';
import { response } from 'express';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photographers-list',
  templateUrl: './photographers-list.component.html',
  styleUrl: './photographers-list.component.css'
})
export class PhotographersListComponent {
  constructor(private httpservice:PhotographerslistserviceService,private router:Router){}
  P:any;
  ngOnInit()
  {
    this.httpservice.getPhotographersList().subscribe(
      (response)=>{this.P=response},
      (error)=>{console.log(error)}
    );
  }
  gotobooking(photographerName:string)
  {
    sessionStorage.setItem('photographerName', photographerName);
    this.router.navigate(['/book-pgrapher']);
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

}
