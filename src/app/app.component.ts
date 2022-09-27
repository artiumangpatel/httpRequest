import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularHttpRequest';
 constructor(private http:HttpClient){}

  onProductCreate(products:{pName:string,desc:string,price:string}){
 console.log(products);
 const headers =new  HttpHeaders({'myheaders':'youth'});
 this.http.post('https://httprequest-e5ed6-default-rtdb.firebaseio.com/products.json',products,{headers:headers}).subscribe((res)=>{console.log(res)});
  }
}
