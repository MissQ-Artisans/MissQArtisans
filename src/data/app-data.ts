export class newRegister{
    id:Number;
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
    JobTitle:string;

}

export class newLogin{
    username: string;
    password: string;
}
export class jobOrders{
    name: string;
    title:string;
    sched:Date;
    location:string;
    rate:Number;

}