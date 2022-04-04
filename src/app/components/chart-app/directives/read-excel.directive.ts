import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

import { Observable, Subscriber } from 'rxjs';

import * as XLSX from 'xlsx'
@Directive({
  selector: '[appReadExcel]',
  exportAs:'readexcel'
})
export class ReadExcelDirective {
  
  excelObservable:Observable<any>
  @Output() eventEmitter = new EventEmitter()
  constructor() { }
  @HostListener("change",["$event.target"])  onChange(target:HTMLInputElement){
    if(target.files!=null ){
      const file = target.files[0]
      this.excelObservable = new Observable((subscriber:Subscriber<any>)=>{
        this.readFile(file,subscriber)
      })
    }
    this.excelObservable.subscribe((d)=>{
      this.eventEmitter.emit(d);
    })
  }
  readFile(file:File,subscriber:Subscriber<any>){
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file)

    fileReader.onload= (e)=>{
      const bufferArray = e.target?.result;
      const workBook:XLSX.WorkBook = XLSX.read(bufferArray,{type:'buffer'});
      const sheetName = workBook.SheetNames[0]
      const workSheet:  XLSX.WorkSheet = workBook.Sheets[sheetName]
      const data = XLSX.utils.sheet_to_json(workSheet)
      subscriber.next(data);
      subscriber.complete();

     
     
    }
  }
  
}
