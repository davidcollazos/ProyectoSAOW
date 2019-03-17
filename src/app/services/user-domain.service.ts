import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { User } from '../model/user';


//Change the following URL with your own API Gateway URL.
const API_URL:string = 'https://t3ewn5zs18.execute-api.eu-west-1.amazonaws.com/v1/publicaciones';
const API_URL_ID:string = 'https://t3ewn5zs18.execute-api.eu-west-1.amazonaws.com/v1/publicaciones/id';

@Injectable()
export class UserDomainService {

  constructor(private http: HttpClient) { }
  
  getUsers() {
    return this.http.get(API_URL);
     
    
  }
 


  saveUser(user: User) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(API_URL, user, options);
  }


  deleteUser(Userid: string) {
    return this.http.delete(API_URL_ID,
      {
        params: {
          "id": Userid
        }
      });
  }
  Modificar(user: User) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(API_URL, user, options);
  }
  
 
}