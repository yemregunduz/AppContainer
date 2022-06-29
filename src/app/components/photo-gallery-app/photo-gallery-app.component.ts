import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery-app',
  templateUrl: './photo-gallery-app.component.html',
  styleUrls: ['./photo-gallery-app.component.css']
})
export class PhotoGalleryAppComponent implements OnInit {
  photos =[
  {text:"Birinci",url:"../../../assets/gallery/1.jpeg"},
  {text:"Yılımız",url:"../../../assets/gallery/2.jpeg"},
  {text:"Kutlu",url:"../../../assets/gallery/3.jpeg"},
  {text:"Olsun",url:"../../../assets/gallery/4.jpeg"},
  {text:"Bitanem",url:"../../../assets/gallery/5.jpeg"},]
  cards:Element[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{
    this.getCards();
    this.addClickEventToCard();

  }
  getCards(){
    this.cards = Array.from(document.querySelectorAll(".gallery-card"))
  }
  addClickEventToCard(){
    this.cards.forEach(card=>{
      card.addEventListener("click",()=>{
        this.removeActiveClass();
        if(!card.classList.contains("active")){
          card.classList.add("active")
        }

      })
    })
  }
  removeActiveClass(){
    this.cards.forEach(card=>{
      card.classList.remove("active")
    })
  }

}
