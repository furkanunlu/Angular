import { Component, OnInit } from '@angular/core';
import { Urunler } from './urun';
import { AlertifyService } from '../service/alertify.service';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService:AlertifyService,
              private http:HttpClient,
              private productService:ProductService,
              private aktifRoute:ActivatedRoute){}
  name="Ürünlerimiz"
  filterText=""
  marka !: Urunler[];
  ngOnInit(): void {
    this.aktifRoute.params.subscribe(p=>{
      this.productService.getproduct(p["categoryId"]).subscribe(data=>{
        this.marka=data
      });
    })}
  addToCard(product:Urunler){
    this.alertifyService.success(product.name+" Eklendi.")}}
