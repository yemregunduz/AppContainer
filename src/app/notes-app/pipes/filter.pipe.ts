import { Pipe, PipeTransform } from '@angular/core';
import { NoteModel } from '../models/noteModel';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: NoteModel[], filterText:string): NoteModel[] {

    filterText =filterText ? filterText.toLocaleLowerCase():""
    return filterText?value.filter((n:NoteModel)=> n.content.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
