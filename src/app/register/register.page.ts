import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { newRegister } from '../../data/app-data';
// import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
      tempID: number;
      Fullname:string;
      Address:string;
      Phone:number;
      EmailAdd:string;
      Password:string;
      Confirmpassword:string;
      Birthdate:Date;
      Selfie: string;
      Picture: string;
      NBI: string;
      JobTitle: string;

      registerdata: newRegister;
      
      registerdataArray: newRegister[] = [];

  
constructor(private http: UserServiceService) {
     this.registerdata = new newRegister();
      }

  ngOnInit() {
    // this.http.postHttp(this.registerdataArray).subscribe((data: any) => {
    //   this.registerdataArray = data.data;
    //   console.log("oninit data:", this.registerdataArray)
      
    // });
  }

  onSubmit() {
  
    this.registerdata ={
      id: this.tempID,
      Fullname:this.Fullname,
      Address:this.Address,
      Phone:this.Phone,
      EmailAdd:this.EmailAdd,
      Password:this.Password,
      Confirmpassword:this.Confirmpassword,
      Birthdate:this.Birthdate,
      Selfie: this.Selfie,
      Picture: this.Picture,
      NBI: this.NBI,
      JobTitle: this.JobTitle
    }

  this.registerdataArray.push(this.registerdata)
   console.log("data:",this.registerdataArray);

  

   this.Fullname= "";
   this.Address="";
   this.Phone = null;
   this.EmailAdd = "";
   this.Password = "";
   this.Confirmpassword = "";
   this.Birthdate = null;
   this.Selfie =  "";
   this.Picture = "";
   this.NBI = "";
   this.JobTitle = "";

  
  }
}