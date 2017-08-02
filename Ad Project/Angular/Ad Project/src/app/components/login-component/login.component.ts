import { Component } from '@angular/core';
import { UserService } from '../../services/UserService/user.service'
@Component({
  selector: 'login',
  templateUrl: `./login-html.html`,
  
})
export class LoginComponentClass  {

  public authToken:string;
  public username:string;
  public loginSuccess:boolean = true;

constructor(private userService:UserService){}

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

    this.userService.RegisterUser(user).subscribe((response)=>{console.log("Server says",response)},
                                                        (error)=>{alert("User Already Exist!")} );
}


sendToUserServiceLogin( username:string = null,  password:string = null){
    

  let userlogin = {
    userName : username,
    password : password

  };
  console.log(userlogin);

  
  this.userService.LoginUser(userlogin).subscribe((response) => {
            this.authToken = response.data['auth-token']; 
            this.username = response.data['userId'];
              
            if(this.authToken!=null){
              
                document.getElementById('closeModal').click();
               this.userService.setAuthToken(this.authToken);
               this.userService.setUserName(this.username);
               
               
               
            }
            if(this.authToken==null){
                this.loginSuccess = false;

            }
            }, 
            
           (error)=>{
             alert("Wrong Credentials")
            }
          );



}

}
