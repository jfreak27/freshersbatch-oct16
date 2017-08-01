import { Component } from '@angular/core';
import { UserService } from '../../services/UserService/user.service'
@Component({
  selector: 'login',
  templateUrl: `./login-html.html`,
  providers : [UserService]
})
export class LoginComponentClass  {

  public authToken:string;

constructor(private registerService:UserService){}

sendToUserServiceRegister(fname:string,lname:string,uname:string,pwd:string,email:string,phone:number){
let msg:any;

    let user = {

        firstName:fname ,
        lastName:lname ,
        userName:uname,
        password:pwd ,
        email:email ,
        phone: phone
    };

    this.registerService.RegisterUser(user).subscribe((response)=>{console.log("Server says",response)},
                                                        (error)=>{alert("User Already Exist!")} );
}


sendToUserServiceLogin( username:string = null,  password:string = null){
    

  let userlogin = {
    userName : username,
    password : password

  };

  
  this.registerService.LoginUser(userlogin).subscribe((response) => {console.log(response);}, 
                                                  (error)=>{alert("Wrong Credentials")});



}

}
