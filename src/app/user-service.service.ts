import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 

  constructor(private http: HttpClient) {

  }
//   postHttp(dataArray) {
//     return this.http.post<any>(environment.artisans+"/newArtisans",dataArray)
    
//   }
 

}