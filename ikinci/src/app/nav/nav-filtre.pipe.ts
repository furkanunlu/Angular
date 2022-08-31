import { Pipe, PipeTransform } from '@angular/core';
import { Urunler } from '../product/urun';

@Pipe({
  name: 'navFiltre'
})
export class NavFiltrePipe implements PipeTransform {

  
  transform(value: Urunler[], filterText?:any): Urunler[] {
    filterText=filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((p:Urunler)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  
  }
}
