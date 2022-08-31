import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kategoriler } from '../kategori/kategoriler';

@Injectable({
  providedIn: 'root'
})
export class KategoriService {

  constructor(private http:HttpClient) { }
  patch="http://localhost:3000/markam"
  getkategori():Observable<Kategoriler[]>{
    return this.http.get<Kategoriler[]>(this.patch)}}
