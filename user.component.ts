import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { response } from 'express';
import { error } from 'console';
import { User } from '../User';
import { Booking } from '../Booking';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private httpservice:UserserviceService,private router:Router){}
  userr:any;
  b1:Booking[]=new Array();
  //b1=null;

  ngOnInit()
  {
    this.httpservice.fetchUserDetail().subscribe(
      (response)=>{this.userr=response},
      (error)=>{console.log(error)}
    );
  }
  update(uid:number,uname:string,usurname:string,email:string,uphone:number,addr:string,password:string,bookingList:any)
  {
      this.userr=new User(uid,uname,usurname,email,uphone,password,bookingList);
      this.httpservice.update(this.userr).subscribe(
        (response)=>{this.userr=response;
        console.log(this.userr);}
      );
  }

delete(uid:number)
  {
    this.httpservice.delete(uid).subscribe(
      (response:string)=>
      {
        this.userr=response;
        console.log(this.userr);
        if(this.userr.indexOf('registration deleted successfully')!=-1)
        alert('resistraion deleted successfully')
      else 
      document.write(this.userr)
      },
    (error)=>{console.log(error)}

      
    );
  }

  model1=new User(4,'saanu','mourya','saanu@gmail.com',9898675643,'mourya11',this.b1);
  m:any;
  create()
  {
    this.httpservice.create(this.model1).subscribe(
     (response)=>{this.m=response ;
      console.log(this.m);},
      (error)=>{console.log(error)}
    );
  }
  gotoeventlistpage()
  {
    this.router.navigate(['/event-list']);
  }
}
