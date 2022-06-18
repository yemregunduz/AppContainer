import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-app',
  templateUrl: './calculator-app.component.html',
  styleUrls: ['./calculator-app.component.css']
})
export class CalculatorAppComponent implements OnInit {

  constructor() { }
  calculator={
    firstOperand:"",
    secondOperand:"",
    displayValue:"0",
    operator:"",
    waitForSecondOperand:false
  }
  buttons : Element[]
  ngOnInit(): void {
    this.getElements();
    this.handleClickEvent();
    this.handleKeyboardEvent();
  }
  handleClickEvent(){
    this.buttons.map(button=>{
      button.addEventListener('click',(e:any)=>{
        switch(button.className){
          case 'button clear':
            if(e.target.innerText=="C"){
              this.resetCalculator();
            }
            else{
              this.deleteDigit();
            }
            break;
          case 'button operator':
              this.handleOperator(e.target.innerText)
            break;
          case 'button eval':
            this.calculate();
            break;
          case 'button digit':
            this.updateDisplay(e.target.innerText);
            this.selectOperand();
            break;
        }
      })
    })
  }
  handleKeyboardEvent(){
    var keyboardValue=""
    document.addEventListener('keydown',(event:KeyboardEvent)=>{
      keyboardValue = this.keyboardInputRegulatory(event.key)
      this.buttons.map((button:any)=>{
        if(keyboardValue == button.innerHTML){
          button.click();
          button.classList.add("active")
          setTimeout(()=>{
            button.classList.remove("active")
          },100) 
        }
      })
    })
  }
  getElements(){
    this.buttons = Array.from(document.getElementsByClassName("button"))
  }
  updateDisplay(value:string){
    if(value =="±"  && this.calculator.displayValue.length==1 && this.calculator.displayValue =="0"){
      return
    }
    if(value=="±" && !this.calculator.displayValue.includes("-") ){
      this.calculator.displayValue = "-"+this.calculator.displayValue
      value=""
    }
    if(this.calculator.displayValue.includes("-")&&value=="±"){
      this.calculator.displayValue = this.calculator.displayValue.substring(1)
      value =""
    }
    if(this.calculator.waitForSecondOperand == true){
      this.calculator.displayValue = "";
      this.calculator.waitForSecondOperand = false;
    }
    if(value=="." && this.calculator.displayValue.includes(".")){
      value="";
    }
    if(this.calculator.displayValue == "0" && value != "."&& this.calculator.displayValue.length == 1){
      this.calculator.displayValue = this.calculator.displayValue.substring(1);
    }
    this.calculator.displayValue +=value;
  }
  handleFirstOperand(){
    this.calculator.firstOperand = this.calculator.displayValue
  }
  handleSecondOperand(){
    this.calculator.secondOperand = this.calculator.displayValue
  }
  selectOperand(){
    if(this.calculator.operator.length==0){
      this.handleFirstOperand();
    }
    else{
      this.handleSecondOperand();
    }
  }
  handleOperator(value:string){
    if(this.calculator.firstOperand.length>0){
      this.calculator.waitForSecondOperand = true;
      this.calculator.operator = value;
    }
    this.calculate();

  }
  calculate(){
    if(this.calculator.firstOperand.length>0 && this.calculator.secondOperand.length>0){
      switch(this.calculator.operator){
        case '+':
          this.calculator.displayValue = (parseFloat(this.calculator.firstOperand) + parseFloat(this.calculator.secondOperand)).toString();
          break;
        case '-':
          this.calculator.displayValue = (parseFloat(this.calculator.firstOperand)- parseFloat(this.calculator.secondOperand)).toString();
          break;
        case '*':
          this.calculator.displayValue = (parseFloat(this.calculator.firstOperand)* parseFloat(this.calculator.secondOperand)).toString();
          break;
        case '/':
          this.calculator.displayValue = (parseFloat(this.calculator.firstOperand)/ parseFloat(this.calculator.secondOperand)).toString();
          break;
        case '^':
          this.calculator.displayValue = Math.pow(parseFloat(this.calculator.firstOperand),parseFloat(this.calculator.secondOperand)).toString();
          break;
      }
    }
    this.checkOverflowing();
    
  }
  resetCalculator(){
    this.calculator = {
      firstOperand: "", 
      secondOperand:"",
      displayValue:"0",
      waitForSecondOperand:false,
      operator:""
    }
  }
  deleteDigit(){
    if(this.calculator.displayValue != "0" && this.calculator.waitForSecondOperand == false){
      if(this.calculator.displayValue.length>1){
        this.calculator.displayValue=this.calculator.displayValue.substring(0,this.calculator.displayValue.length-1)
      }
      else{
        this.calculator.displayValue = "0"
      }
      this.selectOperand();
    }
  }
  checkOverflowing(){
    if(parseFloat(this.calculator.displayValue) > Number.MAX_VALUE){
      this.calculator.displayValue = "TAŞMA"
    }
    else{
       this.handleFirstOperand(); 
    }
  }
  keyboardInputRegulatory(keyboardValue:string){
    if(keyboardValue == "Backspace"){
      keyboardValue = "←"
    }
    if(keyboardValue == "Enter"){
      keyboardValue = "="
    }
    if(keyboardValue == "c"){
      keyboardValue = "C"
    }
    return keyboardValue;
  }

}
