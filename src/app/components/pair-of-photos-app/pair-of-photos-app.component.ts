import { Component, OnInit } from '@angular/core';
import { CardImage } from './models/cardImage';

@Component({
  selector: 'app-pair-of-photos-app',
  templateUrl: './pair-of-photos-app.component.html',
  styleUrls: ['./pair-of-photos-app.component.css']
})
export class PairOfPhotosAppComponent implements OnInit {

  constructor() { }

  cardImages : CardImage[]=[
    {id:0,imageUrl:"../../../assets/pairofphotos/komurcu-image.jpg",isSelected:false},
    {id:1,imageUrl:"../../../assets/pairofphotos/komurcu-image.jpg",isSelected:false},
    {id:2,imageUrl:"../../../assets/pairofphotos/cat-image.jpg",isSelected:false},
    {id:3,imageUrl:"../../../assets/pairofphotos/cat-image.jpg",isSelected:false},
    {id:4,imageUrl:"../../../assets/pairofphotos/crocodile-image.jpg",isSelected:false},
    {id:5,imageUrl:"../../../assets/pairofphotos/crocodile-image.jpg",isSelected:false},
    {id:6,imageUrl:"../../../assets/pairofphotos/flower-image.jpg",isSelected:false},
    {id:7,imageUrl:"../../../assets/pairofphotos/flower-image.jpg",isSelected:false},
    {id:8,imageUrl:"../../../assets/pairofphotos/kemal-sunal-image.jpg",isSelected:false},
    {id:9,imageUrl:"../../../assets/pairofphotos/kemal-sunal-image.jpg",isSelected:false},
    {id:10,imageUrl:"../../../assets/pairofphotos/memati-image.jpg",isSelected:false},
    {id:11,imageUrl:"../../../assets/pairofphotos/memati-image.jpg",isSelected:false},
    {id:12,imageUrl:"../../../assets/pairofphotos/ataturk-image.jpg",isSelected:false},
    {id:13,imageUrl:"../../../assets/pairofphotos/ataturk-image.jpg",isSelected:false},
    {id:14,imageUrl:"../../../assets/pairofphotos/monkey-image.jpeg",isSelected:false},
    {id:15,imageUrl:"../../../assets/pairofphotos/monkey-image.jpeg",isSelected:false},
    {id:16,imageUrl:"../../../assets/pairofphotos/zootopia-image.jpg",isSelected:false},
    {id:17,imageUrl:"../../../assets/pairofphotos/zootopia-image.jpg",isSelected:false},

  ]
  selectedCards:CardImage[]=[]
  cards:Element[]
  ngOnInit(): void {
    this.shuffle();
  }
  ngAfterViewInit(){
    this.handleCardElements();
  }
  handleCardElements(){
    this.cards = Array.from(document.getElementsByClassName("card"))
    this.cards.map((card)=>{
      card.addEventListener("click",()=>{
        this.selectedCards.push(this.cardImages[parseInt(card.id)])
        console.log(this.selectedCards)
        this.cardImages[parseInt(card.id)].isSelected = !this.cardImages[parseInt(card.id)].isSelected
        if(this.selectedCards.length==2){
          this.checkResult(this.selectedCards[0],this.selectedCards[1])
          this.selectedCards = [];
        }
      })
    })
  }
  shuffle(){
    let currentIndex = this.cardImages.length;
    let randomIndex;
    while(currentIndex!=0){
      randomIndex = Math.floor(Math.random()*currentIndex)
      currentIndex--
      this.cardImages[currentIndex].id = randomIndex;
      this.cardImages[randomIndex].id = currentIndex;
      [this.cardImages[currentIndex],this.cardImages[randomIndex]] = [this.cardImages[randomIndex],this.cardImages[currentIndex]]
    }
  }
  checkResult(firstCardImage:CardImage,secondCardImage:CardImage){
    if(firstCardImage.imageUrl == secondCardImage.imageUrl && firstCardImage.id!=secondCardImage.id){
      //bilindiğinde yazılacak kodlar 

    }
    else{
      //bilinemediginde yazılacak kodlar 
    }
  }

}
