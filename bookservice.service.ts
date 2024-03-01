import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Booking } from './Booking';
import { text } from 'stream/consumers';


@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http:HttpClient) { }
  getAllBookingsDetails()  {
  const url="http://localhost:8080/getAllBookingsDetails";
    return this.http.get(url)
  }
  create(model:Booking,uid:number)
  {
    const url="http://localhost:8080/newBooking?uId="+uid;
    console.log(model);
    var headers=new HttpHeaders({'Content-Type':'application/json',responseType:'text'});
    return this.http.post(url,model,{headers,'responseType':'text'});
  }
  delete(bid:number)
  {
    const url="http://localhost:8080/deleteBookings/"+ bid;
    var headers=new HttpHeaders({'Content-Type':'application/json',responseType:'text'});
    return this.http.delete(url,{headers,'responseType':'text'});

  }
}
