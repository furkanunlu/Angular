import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Urunler} from '../product/urun';
import { tap,catchError } from 'rxjs/operators' ;
@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }
  patch="http://localhost:3000/marka"
  getproduct(categoryId: number):Observable<Urunler[]>{
    let newpatch=this.patch
    if(categoryId){
      newpatch +="?categoryId="+categoryId
    }
    return this.http.get<Urunler[]>(newpatch).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  addProduct(product:Urunler):Observable<Urunler[]>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Urunler[]>(this.patch,product,httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
    catchError(this.handleError))}
      


 

  handleError(err:HttpErrorResponse){
    let errorMessage=''
    if(err.error instanceof ErrorEvent){
      errorMessage="Bir hata oluştu"+err.error.message
    }
    else{
      errorMessage="Sistemsel Hata"
    }
    return throwError(errorMessage);
    
  }
  
}
loggedIn=false;
login(user:User):boolean{
  if(user.UserName=="furkan"&&user.password=="1234"){
    this.loggedIn=true;
    localStorage.setItem("islogged",user.UserName);
    return true;
  }
  else{
    return false;
  }
}
isLoggedIn(){
  return this.loggedIn;
}
logOut(){
  localStorage.removeItem("islogged");
  this.loggedIn=false;
}