import { Component } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';
import { Booking } from '../Booking';
import { response } from 'express';
import { error } from 'console';
import { Admin } from '../Admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent{
  constructor(private httpservice:AdminserviceService,private router:Router){}
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
      this.userr=new Admin(uid,uname,usurname,email,uphone,password,bookingList);
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
  

  model1=new Admin(4,'saanu','mourya','saanu@gmail.com',9898675643,'mourya11',this.b1);
  m:any;
  create()
  {
    this.httpservice.create(this.model1).subscribe(
     (response)=>{this.m=response ;
      console.log(this.m);},
      (error)=>{console.log(error)}
    );
  }
  gotoadmineventpage()
  {
    this.router.navigate(['/adminevent']);
  }
}

