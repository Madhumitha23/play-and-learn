import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';

interface frequencyCount {
  [key: number]: number
}
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})

export class SkillComponent implements OnInit {
  num1:number=0;
  num2:number=0;
  num3:number=0;
  num4:number=0;
  numbers:number=0;
  numbersArray:number[]=[];
  title:string='';
  operator:string='';
  question:string='';
  skillNumber:number=0;
  answer: string = '';  
  answer1: string = ''; 
  answer2: string = ''; 
  currentLevel: number = 1;
  correctAnswersCount=0;
  boxInnerCount : string='';
  tens =[10,20,30,40,50,60,70,80,90,100];
  previousLocation:string='';
  showFirstForm:boolean=false;
  showSecondForm:boolean=false;
  showThirdForm:boolean=false;
  showFourthForm:boolean=false;
  showFifthForm:boolean=false;
  showWideInput:boolean=false;
  showMediumWideInput:boolean=false;
  options:number[]=[0,0,0,0];
  frequencyMap:frequencyCount={};
  @ViewChild('firstBox', { static: false }) firstBox: ElementRef = {} as ElementRef;
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.skillNumber = this.activatedRoute.snapshot.params['skillNumber'];
    this.getSkillName(+this.skillNumber);
    console.log(this.showWideInput)
  }

  getSkillName(skillNumber:number)
  {
    switch(skillNumber)
    {
      case 0.3:{        
        this.addTwoNumbersUpTo5();
        this.previousLocation='gradeprekg';
        this.operator='+';
        this.numbers=2;
        this.title='Add';
        this.DisplayFirstForm();
        break;
      }
      case 0.4:{       
        this.addTwoNumbersUpTo10();
        this.previousLocation='gradeprekg';
        this.operator='+';
        this.numbers=2;
        this.title='Add';
        this.DisplayFirstForm();
        break;
      }
      case 1.1:{       
        this.addTens();
        this.previousLocation='grade1';
        this.operator='+';
        this.numbers=2;
        this.title='Add';
        this.DisplayFirstForm();
        break;
      }
      case 1.2:{
        this.addThreeOrMoreNumbersUpto10();
        this.previousLocation='grade1';
        this.operator='+';
        this.numbers=3;
        this.title='Add';
        this.DisplayFirstForm();
        break;
      }
      case 1.3:{
        this.subtractTens();
        this.previousLocation='grade1';
        this.operator='-';
        this.numbers=2;
        this.title='Subtract';
        this.DisplayFirstForm();
        break;
      }
      case 1.4:{
        this.subtractOneDigitFromTwoDigitNumber();
        this.previousLocation='grade1';
        this.operator='-';
        this.numbers=2;
        this.title='Subtract';
        this.DisplayFirstForm();
        break;
      }
      case 2.1:{
        this.addOneDigitNumberToTwoDigitNumber();
        this.previousLocation='grade2';
        this.operator='+';
        this.numbers=2;
        this.title='Add';
        this.DisplayFirstForm();
        break;
      }
      case 2.2:{
        this.addThreeOrMoreNumbers();
        this.previousLocation='grade2';
        this.operator='+';
        this.numbers=3;
        this.title='Add';
        this.DisplayFirstForm();
        break;
      }
      case 2.3:{
        this.subtractTensFromTwoDigitNumber();
        this.previousLocation='grade2';
        this.operator='-';
        this.numbers=2;
        this.title='Subtract';
        this.DisplayFirstForm();
        break;
      }
      case 2.4:{
        this.subtractTwoDigitFromTwoDigit();
        this.previousLocation='grade2';
        this.operator='-';
        this.numbers=2;
        this.title='Subtract';
        this.DisplayFirstForm();
        break;
      }
      case 3.1:{
        this.addTwoNumbersUpTo1000();
        this.previousLocation='grade3';
        this.operator='+';
        this.numbers=2;
        this.title='Add';  
        this.DisplayFirstForm();      
        break;
      }
      case 3.2:{
        this.findMissingNumber();        
        this.previousLocation='grade3';
        this.operator='+';
        this.numbers=2;
        this.title='Add';
        this.DisplaySecondForm();
        break;
      }
      case 3.3:{
        this.subtractTwoNumbersUpTo1000();        
        this.previousLocation='grade3';
        this.operator='-';
        this.numbers=2;
        this.title='Subtract';
        this.DisplayFirstForm();
        break;
      }
      case 3.4:{
        this.completeSubtractionSentence();        
        this.previousLocation='grade3';
        this.operator='?';
        this.numbers=2;
        this.title='Fill in the missing number';
        this.DisplaySecondForm();
        break;
      }
      case 4.1:{
        this.addTwoNumbersUpto5000000();        
        this.previousLocation='grade4';
        this.operator='+';
        this.numbers=2;
        this.title='Add';
        this.showWideInput=true;
        this.DisplayFirstForm();
        break;
      }      
      case 4.2:{
        this.findTwoNumbersWithParticularSum();        
        this.previousLocation='grade4';
        this.operator='??+';
        this.numbers=2;
        this.title='Find numbers with a Particular Sum';        
        this.DisplayThirdForm();
        break;
      }
      case 4.3:{
        this.subtractTwoNumbersUpTo5000000();        
        this.previousLocation='grade4';
        this.operator='-';
        this.numbers=2;
        this.title='Subtract';        
        this.DisplayFirstForm();
        break;
      }
      case 4.4:{
        this.findTwoNumbersWithParticularDifference();        
        this.previousLocation='grade4';
        this.operator='??-';
        this.numbers=2;
        this.title='Find numbers with a Particular Difference';        
        this.DisplayThirdForm();
        break;
      }
      case 5.1:{
        this.MultiplyTens();        
        this.showMediumWideInput=true;
        this.previousLocation='grade5';
        this.operator='*';
        this.numbers=2;
        this.title='Multiply';        
        this.DisplayFirstForm();
        break;
      }

      case 5.2:{
        this.MultiplyTwoNumbers();        
        this.showMediumWideInput=true;
        this.previousLocation='grade5';
        this.operator='*';
        this.numbers=2;
        this.title='Multiply';        
        this.DisplayFirstForm();
        break;
      }

      case 5.3:{
        this.DivideTwoNumbers();                
        this.previousLocation='grade5';
        this.operator='÷';
        this.numbers=2;
        this.title='Divide';        
        this.DisplayFirstForm();
        break;
      }

      case 5.4:{
        this.DivideTwoNumbersWithRemainder();                
        this.previousLocation='grade5';
        this.operator='??÷';
        this.numbers=2;
        this.title='Divide';        
        this.DisplayFourthForm();
        break;
      }

      case 6.1:{
        this.DivideTwoNumbersEndingWithZeros();                
        this.previousLocation='grade6';
        this.operator='÷';
        this.numbers=2;
        this.title='Divide';        
        this.DisplayFirstForm();
        break;
      }

      case 6.2:{
        this.DivideTwoNumbersWithRemainderWithDivisorUpto1000();                
        this.previousLocation='grade6';
        this.operator='??÷';
        this.numbers=2;
        this.title='Divide';        
        this.DisplayFourthForm();
        break;
      }

      case 6.3:{
        this.CalculateMean();                
        this.previousLocation='grade6';
        this.operator='Mean';
        this.numbers=4;
        this.title='What is the mean? Round to one decimal place';        
        this.DisplayFifthForm();
        break;
      }

      case 6.4:{
        this.CalculateMode();                
        this.previousLocation='grade6';
        this.operator='Mode';
        this.numbers=4;
        this.title='What is the mode?';        
        this.DisplayFifthForm();
        break;
      }

      case 7.1:{
        this.CalculatePercentOfNumbers();                
        this.previousLocation='grade7';
        this.operator='percent';
        this.numbers=2;
        this.title='Solve the following problem';        
        this.DisplayFirstForm();
        break;
      }

      case 7.2:{
        this.CalculateMean();                
        this.previousLocation='grade7';
        this.operator='Mean';
        this.numbers=4;
        this.title='What is the mean? Round to one decimal place';        
        this.DisplayFifthForm();
        break;
      }

      case 7.3:{
        this.CalculateMean();                
        this.previousLocation='grade7';
        this.operator='Mean';
        this.numbers=4;
        this.title='What is the mean? Round to one decimal place';        
        this.DisplayFifthForm();
        break;
      }

      case 7.4:{
        this.CalculateMode();                
        this.previousLocation='grade7';
        this.operator='Mode';
        this.numbers=4;
        this.title='What is the mode?';        
        this.DisplayFifthForm();
        break;
      }

      case 7.5:{
        this.CalculateFactorial();                
        this.showMediumWideInput=true;
        this.previousLocation='grade7';
        this.operator='Factorial';
        this.numbers=1;
        this.title='Evaluate';        
        this.DisplayFirstForm();
        break;
      }

      default:{    
        this.previousLocation='home';    
        break;
      }
    }
  }

  addTwoNumbersUpTo5(){
    this.num1 = Math.floor(Math.random() * 5)+1;
    this.num2 = Math.floor(Math.random() * 5)+1; 
    this.question = this.num1 + ' + ' + this.num2 + ' = ' ;
    this.answer = '';        
  }
  addTwoNumbersUpTo10(){
    this.num1 = Math.floor(Math.random() * 10);
    this.num2 = Math.floor(Math.random() * 10);
    this.question = this.num1 + ' + ' + this.num2 + ' = ' ;
    this.answer = '';        
  }

  addTens(){
    this.num1 = this.tens[Math.floor(Math.random() * 10)];
    this.num2 = this.tens[Math.floor(Math.random() * 10)];
    this.question = this.num1 + ' + ' + this.num2 + ' = ' ;
    this.answer = '';         
  }

  addThreeOrMoreNumbersUpto10(){
    this.num1 = Math.floor(Math.random() * 10);
    this.num2 = Math.floor(Math.random() * 10);
    this.num3 = Math.floor(Math.random() * 10);
    this.question = this.num1 + ' + ' + this.num2 + ' + ' + this.num3 + ' = ' ;
    this.answer = '';        
  }

  subtractTens(){
    this.num1 = this.tens[Math.floor(Math.random() * 10)];
    this.num2 = this.tens[Math.floor(Math.random() * 10)];
    while(this.num2 > this.num1)
    {
      this.num2 = this.tens[Math.floor(Math.random() * 10)];
    }
    this.question = this.num1 + ' - ' + this.num2 + ' = ' ;
    this.answer = '';        
  }

  subtractOneDigitFromTwoDigitNumber()
  {
    this.num1 = Math.floor(Math.random() * 90 + 10);
    this.num2 = Math.floor(Math.random() * 10);
    this.question = this.num1 + ' - ' + this.num2 + ' = ' ;
    this.answer = '';        
  }

  addOneDigitNumberToTwoDigitNumber(){
    this.num1 = Math.floor(Math.random() * 90 + 10);
    this.num2 = Math.floor(Math.random() * 10);
    this.question = this.num1 + ' + ' + this.num2 + ' = ' ;
    this.answer = '';  
  }

  addThreeOrMoreNumbers(){
    this.num1 = Math.floor(Math.random() * 20);
    this.num2 = Math.floor(Math.random() * 10);
    this.num3 = Math.floor(Math.random() * 10);
    this.question = this.num1 + ' + ' + this.num2 + ' + ' + this.num3 + ' = ' ;
    this.answer = ''; 
  }

  subtractTensFromTwoDigitNumber()
  {
    this.num1 = Math.floor(Math.random() * 90 + 10);
    this.num2 = this.tens[Math.floor(Math.random() * 10)];
    while(this.num2 > this.num1)
    {
      this.num2 = this.tens[Math.floor(Math.random() * 10)];
    }
    this.question = this.num1 + ' - ' + this.num2 + ' = ' ;
    this.answer = ''; 
  }

  subtractTwoDigitFromTwoDigit()
  {
    this.num1 = Math.floor(Math.random() * 90 + 10);
    this.num2 = Math.floor(Math.random() * 90 + 10);
    while((this.num2 > this.num1) || (this.num1%10 < this.num2%10))
    {
      this.num2 = Math.floor(Math.random() * 90 + 10);
    }
    this.question = this.num1 + ' - ' + this.num2 + ' = ' ;
    this.answer = ''; 
  }

  addTwoNumbersUpTo1000(){
    this.num1 = Math.floor(Math.random() * 99)+1;
    this.num2 = Math.floor(Math.random() * 1000)+1; 
    this.question = this.num1 + ' + ' + this.num2 + ' = ' ;
    this.answer = '';        
  }

  findMissingNumber(){
    this.num1 = Math.floor(Math.random() * 10);
    this.num2 = Math.floor(Math.random() * 10);
    this.num3 = this.num1+this.num2;
    this.question =  ' + ' + this.num2 + ' = ' + this.num3;
    this.answer = ''; 
  }

  subtractTwoNumbersUpTo1000(){
    this.num1 = Math.floor(Math.random() * 1000)+1;
    this.num2 = Math.floor(Math.random() * 99)+1; 
    while((this.num2 > this.num1) || (this.num1%10 < this.num2%10))
    {
      this.num2 = Math.floor(Math.random() * 99) + 1;
    }
    this.question = this.num1 + ' - ' + this.num2 + ' = ' ;
    this.answer = '';        
  }

  completeSubtractionSentence(){
    this.num1 = Math.floor(Math.random() * 10);
    this.num2 = Math.floor(Math.random() * 10);
    this.num3 = this.num1+this.num2;
    this.question =  ' - ' + this.num2 + ' = ' + this.num3;
    this.answer = ''; 
  }

  addTwoNumbersUpto5000000(){    
    this.num1 = Math.floor(Math.random() * 9000);
    this.num2 = Math.floor(Math.random() * 9000); 
    this.question = this.num1 + ' + ' + this.num2 + ' = ' ;
    this.answer = '';  
  }

  findTwoNumbersWithParticularSum(){
    this.num1 = Math.floor(Math.random() * 10);
    this.num2 = Math.floor(Math.random() * 10);
    this.num3 = this.num1+this.num2;
    console.log(this.firstBox)
    var arr =[];
    arr = this.getFourRandomIndexes();
    
    
    this.options[arr[0]-1] = this.num1;
    this.options[arr[1]-1] = this.num2;
    this.options[arr[2]-1] = Math.floor(Math.random() * 10);
    this.options[arr[3]-1] = Math.floor(Math.random() * 10);    
    this.answer1='';
    this.answer2='';
  }

  subtractTwoNumbersUpTo5000000(){
    this.num1 = Math.floor(Math.random() * 9000);
    this.num2 = Math.floor(Math.random() * 9000); 
    while(this.num2 > this.num1)
    {
      this.num2 = Math.floor(Math.random() * 9000) + 1;
    }
    this.question = this.num1 + ' - ' + this.num2 + ' = ' ;
    this.answer = '';        
  }

  findTwoNumbersWithParticularDifference(){
    this.num1 = Math.floor(Math.random() * 10);
    this.num2 = Math.floor(Math.random() * 10);
    this.num3 = this.num1+this.num2;   
    console.log(this.num1) 
    console.log(this.num2) 
    console.log(this.num3) 
    var arr =[];
    arr = this.getFourRandomIndexes();   
    this.options[arr[0]-1] = this.num3;
    this.options[arr[1]-1] = this.num1;
    this.options[arr[2]-1] = Math.floor(Math.random() * 10);
    this.options[arr[3]-1] = Math.floor(Math.random() * 10);    
    this.answer1='';
    this.answer2='';
  }

  MultiplyTens(){
    this.num1 = Math.floor(Math.random() * 10) * 10;
    this.num2 = Math.floor(Math.random() * 10) * 10; 
    this.question = this.num1 + ' X ' + this.num2 + ' = ' ;
    this.answer = '';
  }

  MultiplyTwoNumbers(){
    this.num1 = Math.floor(Math.random() * 100);
    this.num2 = Math.floor(Math.random() * 10); 
    this.question = this.num1 + ' X ' + this.num2 + ' = ' ;
    this.answer = '';
  }

  DivideTwoNumbers(){
    const primenumbers =[0,1,2,3,5,7,11,13,17,19];    
    this.num1 = Math.floor(Math.random() * 20);    
    while(primenumbers.includes(this.num1))  
    {
      this.num1 = Math.floor(Math.random() * 20); 
    }
    this.num2 = Math.floor(Math.random() * 5);    
    while(this.num1 % this.num2 != 0  || this.num2==0)
    {
      this.num2 = Math.floor(Math.random() * 5);
    }
    this.question = this.num1 + ' ÷ ' + this.num2 + ' = ' ;
    this.answer = '';
  }

  DivideTwoNumbersWithRemainder(){
    this.num1 = Math.floor(Math.random() * 100);
    this.num2 = Math.floor(Math.random() * 10);
    while(this.num2 === 0 && this.num2 > this.num1)
      this.num2 = Math.floor(Math.random() * 10);
    this.question = this.num1 + ' ÷ ' + this.num2 + ' = ' ;
    this.answer1 = '';
    this.answer2 = '';
  }

  DivideTwoNumbersEndingWithZeros(){    
    this.num1 = Math.floor(Math.random() * 99) * 10;    
    
    this.num2 = Math.floor(Math.random() * 10) * 10;    
    while(this.num1 % this.num2 != 0  || this.num2==0)
    {
      this.num2 = Math.floor(Math.random() * 10) * 10;
    }
    this.question = this.num1 + ' ÷ ' + this.num2 + ' = ' ;
    this.answer = '';
  }

  DivideTwoNumbersWithRemainderWithDivisorUpto1000(){
    this.num1 = Math.floor(Math.random() * 1000);
    this.num2 = Math.floor(Math.random() * 10);
    while(this.num2 === 0 && this.num2 > this.num1)
      this.num2 = Math.floor(Math.random() * 10);
    this.question = this.num1 + ' ÷ ' + this.num2 + ' = ' ;
    this.answer1 = '';
    this.answer2 = '';
  }

  CalculateMean(){
    this.num1 = Math.floor(Math.random() * 10);
    this.num2 = Math.floor(Math.random() * 10);
    this.num3 = Math.floor(Math.random() * 10);
    this.num4 = Math.floor(Math.random() * 10);
    this.question = this.num1 + ',' + this.num2 + ',' + this.num3 + ',' + this.num4;
    this.answer='';
  }

  CalculateMode(){
    this.numbersArray=[];
    this.question='';
    this.frequencyMap={}; 
    let maxCount=0; 
    var oneElementAlreadyFound=false;  
    
    for(let i=0;i<7;i++)
    {     
      this.numbersArray.push(Math.floor(Math.random() * 10));
        if(this.frequencyMap[this.numbersArray[i]] )
          this.frequencyMap[this.numbersArray[i]]+=1;
        else
          this.frequencyMap[this.numbersArray[i]]=1;    
      maxCount = Math.max(this.frequencyMap[this.numbersArray[i]],maxCount);       
      this.question += this.numbersArray[i] + ',';      
    }           ;
    for(let n in this.frequencyMap)
    {
      if(this.frequencyMap[n]==maxCount && !oneElementAlreadyFound)
      {
        oneElementAlreadyFound = true;
        this.numbersArray.push(+n);
        maxCount+=1;
        this.question += n + ','; 
      }      
    }              
    this.question= this.question.slice(0,-1);    
    this.answer='';
  }

  CalculatePercentOfNumbers(){
    this.num1 = Math.floor(Math.random() * 10) * 10;
    this.num2 = Math.floor(Math.random() * 10) * 10;
    while(this.num1 === 0) 
      this.num1 = Math.floor(Math.random() * 10) * 10;  
    while(this.num2 === 0)
      this.num2 = Math.floor(Math.random() * 10) * 10;
    this.question = this.num1 + '% of ' + this.num2 + ' = ' ;
    this.answer = '';
  }

  CalculateFactorial(){
    this.num1 = Math.floor(Math.random()*5);
    this.question=this.num1+'! =';
    this.answer = '';
  }

  getFourRandomIndexes(){
    const arr = []
    while(arr.length < 4){
      var candidateInt = Math.floor(Math.random() * 4) + 1
      if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
    }
    return(arr)
  }

  checkAnswer() {
    var isCorrect: boolean =  false;
    var correctAnswer;
    
    switch(this.operator)
    {
      case '+':{
        if(this.showFirstForm)
          correctAnswer=(this.numbers==2)?this.num1+this.num2:this.num1+this.num2+this.num3;
        else
          correctAnswer = this.num3-this.num2;
        break;
      }
      case '-':{
        correctAnswer=this.num1-this.num2;
        break;
      }
      case '%':{
        correctAnswer=this.num1%this.num2;
        break;
      }
      case '*':{
        correctAnswer=this.num1*this.num2;
        break;
      }
      case '?':{
        correctAnswer=this.num3+this.num2;
        break;
      }
      case '??+':{
        
        correctAnswer=this.num1+this.num2;
        break;
      }
      case '??-':{        
        correctAnswer=this.num3-this.num1;
        break;
      }
      case '*':{        
        correctAnswer=this.num3*this.num1;
        break;
      }
      case '÷':{        
        correctAnswer=this.num1/this.num2;
        console.log(this.num1/this.num2)
        break;
      }
      case '??÷':{        
        //do nothing
        break;
      }
      case 'Mean':{        
        correctAnswer=(this.num1+this.num2+this.num3+this.num4)/4;
        console.log(correctAnswer);
        break;
      }
      case 'Mode':{        
        let biggestValue = 0;
        var biggestValuesKey;        
        for(let n in this.frequencyMap)
        {
          let value = this.frequencyMap[n];
          if(value > biggestValue)
          {
            biggestValue = value;
            biggestValuesKey = n;
            correctAnswer = +biggestValuesKey;
          } 
          if(value == biggestValue)                   
          {
            
          }
        }        
        break;
      }
      case 'percent':{
        correctAnswer=(this.num1 /100)*this.num2;        
        break;
      }
      case 'Factorial':{
        let number=this.num1;
        if (number === 0) {
          correctAnswer=1;
        }
        else{
          let fact=1;
          for(let i =1; i <= number;i++)
          {
            fact *= i;
          }
          correctAnswer= fact;
          console.log(correctAnswer);
        }
        break;
      }
    }
    if((this.operator!='??+') && (this.operator!='??-') && (this.operator!='??÷'))
    {      
      isCorrect = (correctAnswer===+this.answer)?true:false;    
    }
    else 
    {      
      if(this.operator==='??+')
        isCorrect = (correctAnswer === +this.answer1 + +this.answer2)?true:false 
      else if(this.operator==='??-')
        isCorrect = (correctAnswer === +this.answer1 - +this.answer2)?true:false 
      else
      {           
        isCorrect = (+this.answer1 === Math.floor(this.num1/this.num2) && +this.answer2===this.num1%this.num2)?true:false;
      }
      // isCorrect = (this.operator == '??+') ? (correctAnswer === +this.answer1 + +this.answer2)?true:false 
      // : (correctAnswer === +this.answer1 - +this.answer2)?true:false;
    }
    
    if (isCorrect) {
      this.generateResult('You are correct','That\'s right answer','success');
      this.correctAnswersCount++;      
      this.getSkillName(+this.skillNumber);
    }
    else {
      this.generateResult('You are wrong','Please try again!','error');      
      this.answer = '';    
    }
  }

  DisplayFirstForm(){
    this.showFirstForm=true;
    this.showSecondForm=false;
    this.showThirdForm=false;    
  }

  DisplaySecondForm(){
    this.showFirstForm=false;
    this.showSecondForm=true;
    this.showThirdForm=false;    
  }

  DisplayThirdForm(){
    this.showFirstForm=false;
    this.showSecondForm=false;
    this.showThirdForm=true; 
    this.showFourthForm=false;   
  }

  DisplayFourthForm(){       
    this.showFourthForm=true;    
  }

  DisplayFifthForm(){
    this.showFifthForm=true;
  }
  
  
  ResetGame()
  {
    this.correctAnswersCount=0;
    this.getSkillName(+this.skillNumber);
  }

  generateResult(title:string,text:string,result:SweetAlertIcon){
    if(this.operator!='??+' && this.operator!='??-' && this.operator!='??÷' && this.operator!='Mode')
    {
      Swal.fire({
        title: title,
        text: text,
        icon: result,
        timer: 1500      
      });
    }
    else
    {
      Swal.fire({
        title: title,
        text: text,
        icon: result,
        timer: 1500 ,
        didClose:()=>{this.firstBox.nativeElement.focus()}         
      });
    }
  }

  
}
