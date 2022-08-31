import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { KategoriComponent } from './kategori/kategori.component';

import { ProductFiltrePipe } from './product/product-filtre.pipe';
import { AlertifyService } from './service/alertify.service';
import { NavFiltrePipe } from './nav/nav-filtre.pipe';
import { ProdcutAddForm1Component } from './product/prodcut-add-form1/prodcut-add-form1.component';
import { ProdcutAddForm2Component } from './product/prodcut-add-form2/prodcut-add-form2.component';
import { LoginComponent } from './login/login.component';
import { SifreService } from './service/sifre.service';
import { LoginGuard } from './login/login.guard';
import { NavvComponent } from './navv/navv.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavComponent,
    KategoriComponent,
    ProductFiltrePipe, ProductFiltrePipe, NavFiltrePipe, ProdcutAddForm1Component, ProdcutAddForm2Component, LoginComponent, NavvComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [AlertifyService,SifreService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
