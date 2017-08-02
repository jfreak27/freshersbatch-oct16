import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core'; 
import { RequestOptions } from '@angular/http';




@Injectable()
export class UserService{

public auth_token:any;
public username:any ;


        constructor(private _http: Http) {

}

setUserName(name:any){

       this.username = name;
          
}


getUserName(){
 
              
        return this.username;
}


setAuthToken(token:any){


        this.auth_token  = token;
       
        


}


getAuthToken(){

 
       return this.auth_token;


}


RegisterUser(user : any) {
        let url = "http://192.168.3.144:9000/register"; //Akshay's machine
        let headers = new Headers();
       
        headers.append('Content-Type', 'application/json');
        

        let options = new RequestOptions({ headers: headers });
       
        
        return this._http.post(url, user, options).map((response: Response)=>response.json());

    }



LoginUser(user:any){
        
        let url = "http://192.168.3.144:9000/login"; //Akshay's machine
        let headers = new Headers();
       
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        
        
        let usercred = {
                userName : user.userName,
                password : user.password

        }
        return this._http.post(url, usercred, options).map((response: Response)=>response.json());


}


LogOutUser(token:any){

         let url = "http://192.168.3.144:9000/logout"; //Akshay's machine
        let headers = new Headers();
       
        headers.append('auth-token', token);

        let options = new RequestOptions({ headers: headers });
        return this._http.delete(url, options).map((response: Response)=>response.json());
        
}



getUserInfo(){

        let url = "http://192.168.3.144:9000/user?userId="+this.username; //Akshay's machine
        let headers = new Headers();
       
        headers.append('auth-token', this.auth_token);
        console.log(url);

        let options = new RequestOptions({ headers: headers });
        return this._http.get(url, options).map((response: Response)=>response.json());

}

}