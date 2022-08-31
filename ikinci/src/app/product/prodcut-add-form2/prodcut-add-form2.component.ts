import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Kategoriler } from 'src/app/kategori/kategoriler';
import { AlertifyService } from 'src/app/service/alertify.service';
import { KategoriService } from 'src/app/service/kategori.service';
import { ProductService } from 'src/app/service/product.service';
import { Urunler } from '../urun';

@Component({
  selector: 'app-prodcut-add-form2',
  templateUrl: './prodcut-add-form2.component.html',
  styleUrls: ['./prodcut-add-form2.component.css'],
  providers:[KategoriService,ProductService]
})
export class ProdcutAddForm2Component implements OnInit {

  constructor(private formBuilder:FormBuilder,private kategoriService:KategoriService,
    private alert:AlertifyService,private productService:ProductService) { }
  productAddForm!: FormGroup;
  urun:Urunler=new Urunler();
  markam!:Kategoriler[]
  creatProductAddForm(){
    this.productAddForm=this.formBuilder.group({
      name:["",Validators.required],
      price:["",Validators.required],
      description:["",Validators.required],
      url:["",Validators.required],
      alt:["",Validators.required],
      categoryId:["",Validators.required]
    });
  }
  ngOnInit(): void {
    this.creatProductAddForm();
    this.kategoriService.getkategori().subscribe(p=>{
      this.markam=p
    });
  }
  add(){
    if(this.productAddForm.valid){
      this.urun=Object.assign({},this.productAddForm.value)
    }
    this.productService.addProduct(this.urun).subscribe(data=>{})
    this.alert.success(this.urun.name+"Ürün Başarı İle Eklendi")
  }

}
