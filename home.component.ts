import { Component } from '@angular/core';
//import { UserbookingserviceService } from '../userbookingservice.service';
import { Router } from '@angular/router';
import { Login } from '../Login';
import { UserserviceService } from '../userservice.service';
import { response } from 'express';
import { User } from '../User';
import { Booking } from '../Booking';
import { Session } from 'node:inspector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts: any;
  b2: Booking[] = new Array();
  constructor(private htppservice: UserserviceService, private router: Router) { }

  model = new User(0, "", "", "", 111, "", this.b2);
  email: any;
  password: any;
  // userlogin() {
  // this.htppservice.userlogin(this.model).subscribe
  // (
  // (response: string) => {
  // this.posts = response;
  // console.log(this.posts);

  // if (this.posts === "you are welcome")
  // this.router.navigate(['/user-product']);
  // else
  // alert(this.posts);
  // }
  // );
  // }






  isLoginVisible: boolean = true;
  isRegVisible: boolean = false;


  goToRegister() {
    this.isLoginVisible = false;
    this.isRegVisible = true;
  }

  goToLogin() {
    this.isLoginVisible = true;
    this.isRegVisible = false;
  }


  m: any
  userlogin() {
    this.htppservice.userlogin(this.email, this.password).subscribe(
      (response: string) => {
        this.posts = response;
        console.log(this.posts);
        if (this.posts === 'Password is invalid!') {
          alert('Password is invalid!');
        }
        else if (this.posts === 'Email not found!') {
          alert('Email not found!');
        } else {
          sessionStorage.setItem('userId', this.posts);
          this.router.navigate(['/first']);
        }
      },
      (error) => alert(error)

    );
  }


  create() {
    this.htppservice.create(this.model).subscribe(
      (response) => {
        this.posts = response;
        console.log(this.posts);
      },
      (error) => { console.log(error) }
    );
  }

  usersignup() {
    // this.htppservice.usersignup(this.model).subscribe(
    // (response)=>{
    // this.posts=response;
    // console.log(response);
    // alert(this.posts);
    // },
    // error=>console.log(error)
    // );
  }
  adminlogin() {


    

  }
  goToAdminLogin()

  {
    this.router.navigate(['/admin']);
  }









  gotouserregisterpage() {
    this.router.navigate(['/user']);
  }
}

