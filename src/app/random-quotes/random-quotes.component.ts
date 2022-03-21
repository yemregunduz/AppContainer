
import { Component, OnInit } from '@angular/core';
import { QuateModel } from './models/quoteModel';
import { QuoteService } from './services/quote.service';

@Component({
  selector: 'app-random-quotes',
  templateUrl: './random-quotes.component.html',
  styleUrls: ['./random-quotes.component.css']
})
export class RandomQuotesComponent implements OnInit {

  quotes : QuateModel[]=[];
  quote: QuateModel = new QuateModel();
  cardColor:string
  warning:string
  constructor(private quoteService:QuoteService) { }

  ngOnInit(): void {
    this.getAllQuotes()
    this.quote.author=""
  }

  getAllQuotes(){
    this.quoteService.getAllQuotes().subscribe(response=>{
      this.quotes = response
    })
  }
  getRandomQuote(){
    var quoteCount = this.quotes.length
    let randomNumber = Math.floor(Math.random()*quoteCount);
    this.quote = this.quotes[randomNumber];
  }
  generateRandomColor()
  {
     this.cardColor='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
  }
  shareTweet(){
    if(this.quote.text.length>0){
      window.open("https://twitter.com/intent/tweet?hashtags=FatmaNurKaraman&text="+this.quote.text,"_blank")
    }
  }

}
