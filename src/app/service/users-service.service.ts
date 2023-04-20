import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rec_user } from '../postquery/postquery.component';
import { User } from '../postquery/postquery.component';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http:HttpClient) { }

  get_recommended_experts(tags : Array<string>){
    console.log("In User service")
    console.log(tags)
    
    return this.http.post<Rec_user[]>("https://ers-api.onrender.com/user/find_experts",{"tags":tags});
  }

  get_all_users(){
    console.log("in user service");
    return this.http.get<User[]>("https://ers-api.onrender.com/user/all");
  }
}
