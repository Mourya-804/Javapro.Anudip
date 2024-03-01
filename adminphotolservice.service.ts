import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminphotolserviceService {

  constructor(private http:HttpClient) { }
  getPhotographersList()
  {
    const url="http://localhost:8080/getPhotographersList";
    return this.http.get(url)
  }
}
