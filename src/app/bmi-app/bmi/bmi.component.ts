import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

  constructor() { }

  inputHeight:number = 0
  inputWeight:number =0
  bmiResult:number;
  bmiResultText:string=""
  textColor:string ="rgba(0, 0, 0, .8)"
  ngOnInit(): void {
  }

  calculate(){
    if(this.inputHeight!=0 && this.inputWeight!=0){
      this.bmiResult=this.inputWeight/Math.pow(this.inputHeight/100,2)
      this.bmiResult=parseFloat(this.bmiResult.toFixed(2))
      if(this.bmiResult<=18.5){
        this.bmiResultText = 'Under weight';
        this.textColor='#FF9900'
      }
      else if(this.bmiResult>18.5 && this.bmiResult<=25){
        this.bmiResultText = "Normal"
        this.textColor="green"
      }
      else if(this.bmiResult>25 && this.bmiResult<=30){
        this.bmiResultText = "Over weight"
        this.textColor="#d64161"
      }
      else{
        this.bmiResultText = "Obese"
        this.textColor="red"
      }
      
    }
    
  }
  reset(){
    this.inputHeight=0
    this.inputWeight=0
    this.bmiResult = 0;
    this.bmiResultText = ''
    this.textColor ="rgba(0, 0, 0, .8)"
  }

}
