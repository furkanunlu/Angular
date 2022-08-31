import { NgModule } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_k } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProdcutAddForm1Component } from './product/prodcut-add-form1/prodcut-add-form1.component';
import { ProdcutAddForm2Component } from './product/prodcut-add-form2/prodcut-add-form2.component';

import { ProductComponent } from './product/product.component';
const routes: Routes = [
  {path:'product',component:ProductComponent},
  {path:'product-add-1',component:ProdcutAddForm1Component,canActivate:[LoginGuard]},
  {path:'product-add-2',component:ProdcutAddForm2Component,canActivate:[LoginGuard]},
  {path:'product/kategori/:categoryId',component:ProductComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'product',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
