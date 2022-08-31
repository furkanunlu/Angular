import { Component, OnInit } from '@angular/core';
import { Kategoriler } from './kategoriler';
import { HttpClient } from '@angular/common/http';
import { KategoriService } from '../service/kategori.service';
@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {

  constructor(private http:HttpClient,private kategoriService:KategoriService) { }
  title="Tüm Ürünler"
  markam!:Kategoriler[]
  ngOnInit(): void {
    this.kategoriService.getkategori().subscribe(p=>{
      this.markam=p
    });
    
  }
}
