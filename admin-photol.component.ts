import { Component } from '@angular/core';
import { AdminphotolserviceService } from '../adminphotolservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-photol',
  templateUrl: './admin-photol.component.html',
  styleUrl: './admin-photol.component.css'
})
export class AdminPhotolComponent {
  constructor(private httpservice:AdminphotolserviceService,private router:Router){}
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
    this.router.navigate(['/adminbooking']);
  }

  gotoeventlistpage()
  {
    this.router.navigate(['/adminevent']);
   }
   gotohomepagee()
   {
     this.router.navigate(['/admin']);
   }

}
