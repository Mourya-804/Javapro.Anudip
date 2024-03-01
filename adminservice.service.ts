import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }

  fetchUserDetail()
  {
    const url="http://localhost:8080/fetchAllUserDetail";
    return this.http.get(url)
  }


  create(model:Admin)
  {
    const url="http://localhost:8080/registerUserDetaill";
    console.log(model);
    var headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url,model,{headers});
  }
  update(n:Admin)//calling api
  {
    const url="http://localhost:8080/editUserDetail/"+n.uId;
    var headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put(url,n,{headers});
  }
  delete(uid:number)
  {
    const url="http://localhost:8080/deleteUserDetail/"+ uid;
    var headers=new HttpHeaders({'Content-Type':'application/json',responseType:'type'});
    return this.http.delete(url,{headers,'responseType':'text'})
  }



}
