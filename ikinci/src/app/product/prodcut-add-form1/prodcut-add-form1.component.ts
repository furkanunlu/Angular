import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Kategoriler } from 'src/app/kategori/kategoriler';
import { AlertifyService } from 'src/app/service/alertify.service';
import { KategoriService } from 'src/app/service/kategori.service';
import { ProductService } from 'src/app/service/product.service';
import { Urunler } from '../urun';

@Component({
  selector: 'app-prodcut-add-form1',
  templateUrl: './prodcut-add-form1.component.html',
  styleUrls: ['./prodcut-add-form1.component.css'],
  providers:[KategoriService,ProductService]
})
export class ProdcutAddForm1Component implements OnInit {

  constructor(private kategoriService:KategoriService,private productService:ProductService,private alert:AlertifyService) {}
  model:Urunler=new Urunler();
  markam!:Kategoriler[]
  ngOnInit(): void {
    this.kategoriService.getkategori().subscribe(p=>{
      this.markam=p
    });
  }
  add(form:NgForm){
    this.productService.addProduct(this.model).subscribe(data=>{})
    this.alert.success(this.model.name+"Ürün Başarı İle Eklendi")
  }

}