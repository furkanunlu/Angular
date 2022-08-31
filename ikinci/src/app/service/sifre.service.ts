import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { LoginUser } from '../modell/loginuser';
import {JwtHelper,tokenNotExpired} from 'angular2-jwt'
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { registerUser } from '../modell/registerUser';
@Injectable()
export class SifreService {
  

  constructor(private httpClient:HttpClient) { }
  patch="http://localhost:50000/Furkanyol/auth/"
  userToken:any
  terstoken:any
  JwtHelper:JwtHelper=new JwtHelper
  router!:Router
  TokenKey="token"
  private alertify!:AlertifyService
  
  login(login:LoginUser){
    let headers=new HttpHeaders();
    headers=headers.append("Content-Type","application/json")
    this.httpClient.post(this.patch+"login",login,{headers:headers}).subscribe(data=>{
      this.saveToken(data['tokenString'])
      this.userToken=data['tokenString']
      this.terstoken=this.jwtHelper.terstoken(data['tokenString'])
      this.alertify.success("Sistem girişi yapıldı")
      this.router.navigateByUrl('/urun')
    })}
  register(registerUser:registerUser){
    let headers=new HttpHeaders();
    headers=headers.append("Content-Type","application/json");
    this.httpClient.post(this.patch+"register",registerUser,{headers:headers}).subscribe(data=>{})
  }
  saveToken(token:any){
    localStorage.setItem('token',token)}
  
  logOut(){
    localStorage.removeItem(this.TokenKey)
  }
  loggedIn(){
    return tokenNotExpired(this.TokenKey)
   }
  getCurrentUserId(){
    return this.JwtHelper.decodeToken(localStorage.getItem(this.TokenKey)).nameid
  }
  }
  

