import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core'; 
import { RequestOptions } from '@angular/http';




@Injectable()
export class UserService{
constructor(private _http: Http) {}



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


}