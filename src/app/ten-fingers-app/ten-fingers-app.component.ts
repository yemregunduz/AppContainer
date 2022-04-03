import { Component, OnInit } from '@angular/core';
import { Result } from './models/result';
import { Word } from './models/word';
import words from './words-json/EnglishWords.json';

@Component({
  selector: 'app-ten-fingers-app',
  templateUrl: './ten-fingers-app.component.html',
  styleUrls: ['./ten-fingers-app.component.css'],
})
export class TenFingersAppComponent implements OnInit {
  constructor() {}
  counter: number = 60;
  words: Word[] = words;
  randomWords: Word[] = [];
  selectedWord: string='';
  isStart: boolean = false;
  index: number = 0;
  result: Result = new Result();
  results:Result[] = []
  ngOnInit(): void {
    this.getRandomWords();
    this.getAllResultFromStorage();
  }
  getRandomWords() {
    var wordsCount = this.words.length;
    for (let i = 0; i < 18; i++) {
      let randomNumber = Math.floor(Math.random() * wordsCount);
      this.randomWords.push(this.words[randomNumber]);
    } 
  }
  startCountdown() {
    if (!this.isStart) {
      this.isStart = true;
      var timer = setInterval(() => {
        if (this.counter > 0) {
          this.counter = this.counter - 1;
        } else {
          this.randomWords = [];
          document.getElementById("wordInput")?.setAttribute("disabled","true")
          this.addResult();
          clearInterval(timer);
        }
      }, 1000);
    }
  }
  restartGame() {
    let inputElement = document.getElementById("wordInput")
    inputElement?.removeAttribute("disabled")
    this.result={accuracy:0,correctAnswerCount:0,correctKeystrokes:0,wordsPerMinute:0,wrongAnswerCount:0,wrongKeystrokes:0}
    this.randomWords = []
    this.getRandomWords();
    this.isStart = false
    this.index= 0
    this.selectedWord = '';
    this.counter = 60;
  }
  checkWordsMatch(index: number) {
    if (this.words.length > 0) {
      let element = document.getElementById('word' + this.index);
      this.index++;
      let word =this.randomWords[index].inEnglish.toLowerCase().trim()
      if (this.index >= 12) {
        this.refreshWords();
        this.index = 6;
      }
      if (this.selectedWord.toLowerCase().trim() == word) {
        element!.style.color = 'green';
        this.calculateResult(word,true);
      } else {
        element!.style.color = 'red';
        this.calculateResult(word,false)
      }
      this.calculateAccuracy();
    }
  }
  checkLettersMatch(index: number) {
    if (this.words.length > 0 && this.selectedWord.length > 0) {
      let element = document.getElementById('word' + this.index);
      if (!this.randomWords[index].inEnglish.toLowerCase().trim().search(this.selectedWord.toLowerCase().trim())) {
        element!.style.color = 'black';
      } else {
        element!.style.color = 'red';
      }
    }
  }
  refreshWords() {
    this.randomWords.splice(0, 6);
    var wordsCount = this.words.length;
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * wordsCount);
      this.randomWords.push(this.words[randomNumber]);
    }
  }

  calculateResult(word:string,isCorrect:boolean) {
    if(isCorrect){
      this.result.correctKeystrokes +=word.length;
      this.result.wordsPerMinute = Math.round(this.result.correctKeystrokes / 5);
      this.result.correctAnswerCount++;
    }
    else{
      this.result.wrongKeystrokes += word.length;
      this.result.wrongAnswerCount++;
    }
    this.selectedWord = ''
  }
  calculateAccuracy() {
    this.result.accuracy = parseFloat( ((this.result.correctKeystrokes /
    (this.result.correctKeystrokes + this.result.wrongKeystrokes)) *100).toFixed(2))
  }
  removeResult(index:number){
    this.results.splice(index,1)
    this.setResultToStorage();
  }
  addResult(){
    this.results.unshift(this.result)
    if(this.results.length>3){
      this.results.pop()
    }
    this.setResultToStorage();
  }
  getAllResultFromStorage(){
    var result = localStorage.getItem("results")
    if(result)
    this.results = JSON.parse( result || '')
  }
  setResultToStorage(){
    localStorage.setItem("results",JSON.stringify(this.results))
  }
}
