import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core'; 
import { RequestOptions } from '@angular/http';





@Injectable()
export class AdService{

public auth_token:any;
public category:any = null;
    constructor(private _http: Http) {

 
}


getAdById(postId:any){
       
        let url = "http://192.168.3.144:9000/viewAd?postId="+postId; //Akshay's machine
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        
        
        let options = new RequestOptions({ headers: headers });
        
        return this._http.get(url).map((response: Response)=>response.json());

}



getAdsByUser(token:any){


      let url = "http://192.168.3.144:9000/posts"; //Akshay's machine
       
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token',token);
      
        
        let options = new RequestOptions({ headers: headers });
        
        return this._http.get(url, options).map((response: Response)=>response.json());




}

getAllAds(){

        let url = "http://192.168.3.144:9000/posts/search"; //Akshay's machine
       
        
        return this._http.get(url).map((response: Response)=>response.json());



}


setCategory(cat:any){

                this.category = cat;

}

getCategory(){
        console.log(this.category);
               return this.category;

}

getAdsByCategory(cat:any){

        let url = "http://192.168.3.144:9000/posts/search?category="+cat; //Akshay's machine
       
        
        return this._http.get(url).map((response: Response)=>response.json());



}

getAdsByText(text:any){

        let url = "http://192.168.3.144:9000/posts/search/text?searchText="+text; //Akshay's machine
       
        
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


sendMessage(id:any, msg:any, token:any){

        let url = "http://192.168.3.144:9000/message"; 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token',token);
        let body = {"message" : msg, "postId": id};
        let options = new RequestOptions({ headers: headers });
        
        return this._http.post(url, body, options).map((response: Response)=>response.json());

}


deleteAd(id:number, token:any){

        let url = "http://192.168.3.144:9000/post?postId="+id; 
        let headers = new Headers();
        
        headers.append('auth-token',token);
        console.log("id: ",id);
        console.log("auth: ",token);
        console.log(url);
        let options = new RequestOptions({ headers: headers });
        
        return this._http.delete(url, options).map((response: Response)=>response.json());


}


editAd(id:any, title:any, uname:any, category:any, description:any, auth_token:any){

    let ad = {
                "postId":id,
                "status":"Open",
                "title" : title,
                "name" : uname,
                "category" :category,
                "description" : description,
               
        };

        console.log(ad);

        let url = "http://192.168.3.144:9000/postAd"; //Akshay's machine
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token',auth_token);
        
        let options = new RequestOptions({ headers: headers });
        
        return this._http.put(url, JSON.stringify(ad), options).map((response: Response)=>response.json());


}


}

