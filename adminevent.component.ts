import { Component } from '@angular/core';
import { AdmineventserviceService } from '../admineventservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminevent',
  templateUrl: './adminevent.component.html',
  styleUrl: './adminevent.component.css'
})
export class AdmineventComponent {


constructor(private httpservice:AdmineventserviceService,private router:Router){}
  E:any;
  ngOnInit()
  {
    this.httpservice.getEventsList().subscribe(
      (response)=>{this.E=response},
      (error)=>{console.log(error)}
    );
  }
  gotophotographerslistpage()
  {
    this.router.navigate(['/admin-photol']);
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

