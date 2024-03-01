import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { application } from 'express';
import { User } from './User';
import { Login } from './Login';
//import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  fetchUserDetail()
  {
    const url="http://localhost:8080/fetchAllUserDetail";
    return this.http.get(url)
  }

  create(model:User)
  {
    const url="http://localhost:8080/registerUserDetaill";
    console.log(model);
    var headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url,model,{headers});
  }
  update(n:User)//calling api
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
  
  // userlogin(model:Login)
  // {
    //  const url="http://localhost:8080/Loogin";
    //  var headers=new HttpHeaders({'Content-Type':'application/json','responseType':'tesxt'});
    //  return this.http.get(url,{headers,'responseType':'text'});

  // }
  userlogin(email:string,password:string)
{const url="http://localhost:8080/login/"+email+"/"+password;
var headers=new HttpHeaders({'Content-Type':'application/json','respopnseType':'text'});
return this.http.get(url,{headers,'responseType':'text'});

}
// usersignup(model:Login)
// {
  // const url="http://localhost:8080/api/userlogin/signup";
  // var headers=new HttpHeaders({'content-type':'application/json'});
  // return this.http.post(url,{headers,responseType:'text'});
// }
}
