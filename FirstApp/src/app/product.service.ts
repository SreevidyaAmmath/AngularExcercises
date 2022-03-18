import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions:any;
  
  constructor(private http:HttpClient) { 
    
    }
  

  addProduct(obj: any):Observable<object>{
   
     return this.http.post("http://localhost:3000/items",obj);
  }


  
  updateProduct(obj: any):Observable<object>{
   
    return this.http.post("http://localhost:3000/items/update",obj);
 }


  

 

}
