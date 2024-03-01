import { Injectable } from '@angular/core';
import { HttpserviceService } from './httpservice.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventserviceService {

  constructor(private http:HttpClient) { }
  getEventsList()
  {
    const url="http://localhost:8080/getEventsList";
    return this.http.get(url)
  }
}
