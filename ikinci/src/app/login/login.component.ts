import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SifreService } from '../service/sifre.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sifreService:SifreService) { }

  user:User=new User;
  ngOnInit(): void {
  }
  login(form:NgForm)
  { 
    this.sifreService.login(this.user)

  }
}
