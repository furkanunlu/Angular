import { Pipe, PipeTransform } from '@angular/core';
import { Urunler } from './urun';

@Pipe({
  name: 'productFiltre'
})
export class ProductFiltrePipe implements PipeTransform {

  transform(value: Urunler[], filterText?:any): Urunler[] {
    filterText=filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((p:Urunler)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;}}


