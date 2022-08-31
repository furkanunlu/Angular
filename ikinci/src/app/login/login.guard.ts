import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';
import { SifreService } from "../service/sifre.service";
@Injectable()
export class LoginGuard implements CanActivate{
    constructor(private sifreService:SifreService,private router:Router){}
    canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        let logged=this.sifreService.isLoggedIn();
        if(logged){
            return true;
        }
        this.router.navigate(["login"]);
        return false;


    }
}