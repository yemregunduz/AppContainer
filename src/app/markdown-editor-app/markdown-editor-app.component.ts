import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { marked } from 'marked';
@Component({
  selector: 'app-markdown-editor-app',
  templateUrl: './markdown-editor-app.component.html',
  styleUrls: ['./markdown-editor-app.component.css']
})
export class MarkdownEditorAppComponent implements OnInit {
  convertedText:string
  text:string="## Markdown work!"
  constructor() { }
  @ViewChild('autoScroll') private myScrollContainer: ElementRef;
  ngOnInit(): void {
    this.updateOutput()
  }

  updateOutput(){
    if(this.convertedText){
      this.scrollToBottom()
    }
    this.convertedText = marked.parse(this.text);

  }
  scrollToBottom(){
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight; 
  }
  downloadAsMdFile(){
    console.log("at")
    var div = document.getElementById('textDiv') as HTMLDivElement;
    var textFileAsBlob = new Blob([this.text], {type:'text/plain'}); 
      let link = document.createElement('a');
      link.setAttribute('visibility', 'hidden');
      link.href = window.webkitURL.createObjectURL(textFileAsBlob);;
      link.download = "README.md"
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

  
}
