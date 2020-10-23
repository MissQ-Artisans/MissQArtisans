import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { newLogin } from '../../data/app-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Username:string;
  Password: string;

  logindata: newLogin;
  logindataArray: newLogin[] = [];

constructor(private http: UserServiceService) {
  this.logindata = new newLogin();

   }

  ngOnInit() {
    
  }

  onSubmit() {
    console.log(this.Username);
   
    this.logindata ={
      username:this.Username,
      password:this.Password
    }

    this.logindataArray.push(this.logindata)
    console.log("data:",this.logindataArray);
   
   this.Username= "";
   this.Password="";
  }

}
