import { Component, OnInit } from '@angular/core';
import { Urunler } from '../product/urun';
import { SifreService } from '../service/sifre.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private sifreService:SifreService){
  }
  title = 'ikinci';
  giris="Giriş Yapınız"
  cikis="Çıkış Yapınız"
  isLoggedin(){

    return this.sifreService.isLoggedIn();
  }

  logOut(){
 
    return this.sifreService.logOut();
  }
  ngOnInit(): void {
  }
  
  
}
