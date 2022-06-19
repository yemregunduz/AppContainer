import { Component, OnInit } from '@angular/core';
import { CardImage } from './models/cardImage';
import data from './cardDataJson/cardData.json'
@Component({
  selector: 'app-pair-of-photos-app',
  templateUrl: './pair-of-photos-app.component.html',
  styleUrls: ['./pair-of-photos-app.component.css'],
})
export class PairOfPhotosAppComponent implements OnInit {
  constructor() {}
  cardImages: CardImage[] = data
  isCounterStart = false
  counter = 0
  waitForResult:boolean = false
  interval:any
  selectedCards: CardImage[] = [];
  cards: Element[];
  ngOnInit(): void {
    this.shuffle();
  }
  clickOnCardEvent(cardImage: CardImage) {
    this.selectedCards.push(cardImage);
    cardImage.isSelected = true
    if (this.selectedCards.length == 2) {
      this.waitForResult = true
      this.checkResult(this.selectedCards[0], this.selectedCards[1]);
      this.selectedCards = [];
    }
  }
  shuffle() {
    let currentIndex = this.cardImages.length;
    let randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      this.cardImages[currentIndex].id = randomIndex;
      this.cardImages[randomIndex].id = currentIndex;
      [this.cardImages[currentIndex], this.cardImages[randomIndex]] = [
        this.cardImages[randomIndex],
        this.cardImages[currentIndex],
      ];
    }
  }
  checkResult(firstCardImage: CardImage, secondCardImage: CardImage) {
    
    if (firstCardImage.imageUrl == secondCardImage.imageUrl && firstCardImage.id != secondCardImage.id) {
      this.waitForResult = false
    } 
    else {
      setTimeout(() => {
        firstCardImage.isSelected = false
        secondCardImage.isSelected = false
        this.waitForResult = false
      }, 1500);
    }
  }
  startCounter(){
    this.isCounterStart=true
    this.interval = setInterval(()=>{
        this.counter++
        if(this.cardImages.every(a=>a.isSelected == true)){
          this.stopCounter();
        }
    },1000)
  }
  stopCounter(){
    clearInterval(this.interval)
    this.isCounterStart = false;
  }
  resetCounter(){
    this.counter=0;
    this.stopCounter();
  }
  playAgain(){
    this.shuffle();
    this.cardImages.forEach(cardImage => {
      if(cardImage.isSelected==true){
        cardImage.isSelected = false
      }
    });
    this.resetCounter();
  }
  
}
