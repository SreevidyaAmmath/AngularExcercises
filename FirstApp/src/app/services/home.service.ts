import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

   httpOptions:any;

  getServices():Observable<any>
  {
    return this.http.get("http://localhost:4500/services")
  }

  getDetails(id:number):Observable<any>
  {
    return this.http.get("http://localhost:4500/details/"+id)
  }

  getFeedbacks():Observable<any>{
    return this.http.get("http://localhost:4500/feedbacks")
  }

  postEnquiry(obj:any):Observable<any>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post("http://localhost:4500/enquiries",obj,this.httpOptions);
   }


   
   postReviews(obj:any):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    return this.http.post("http://localhost:4500/feedbacks",obj,this.httpOptions);
   }

}
