import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core'; 
import { RequestOptions } from '@angular/http';





@Injectable()
export class AdService{

public auth_token:any;
    constructor(private _http: Http) {

 
}


// getAdById(){
       
//         let url = "http://192.168.3.144:9000/viewAd"; //Akshay's machine
//         let headers = new Headers();
//         headers.append('Content-Type', 'application/json');
//         headers.append('auth-token',token);
        
//         let options = new RequestOptions({ headers: headers });
        
//         return this._http.post(url, JSON.stringify(ad), options).map((response: Response)=>response.json());




// }

getAllAds(){

        let url = "http://192.168.3.144:9000/posts/search"; //Akshay's machine
       
        
        return this._http.get(url).map((response: Response)=>response.json());



}

getCategories(){

        let url = "http://192.168.3.144:9000/categories"; //Akshay's machine
       
        
        return this._http.get(url).map((response: Response)=>response.json());

}


postNewAd(token:any, title:string,category:any,description:any,uname:any){

        this.auth_token = token;
    let ad = {

                "title" : title,
                "name" : uname,
                "category" :category,
                "description" : description,
               
        };

        console.log(ad);

        let url = "http://192.168.3.144:9000/postAd"; //Akshay's machine
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token',token);
        
        let options = new RequestOptions({ headers: headers });
        
        return this._http.post(url, JSON.stringify(ad), options).map((response: Response)=>response.json());

}


}

