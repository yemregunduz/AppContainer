import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {
  
  constructor(private domSanitizer:DomSanitizer){}
  transform(value:string): SafeHtml {
    if(value){
      return this.domSanitizer.bypassSecurityTrustHtml(value);
    }
    return ''
  }

}
