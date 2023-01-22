import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  num1:number=0;
  num2:number=0;
  num3:number=0;
  numbers:number=0;
  title:string='';
  operator:string='';
  question:string='';
  skillNumber:number=0;
  answer: string = '';  
  currentLevel: number = 1;
  correctAnswersCount=0;
  boxInnerCount : string='';
  tens =[10,20,30,40,50,60,70,80,90,100];
  previousLocation:string='';
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.skillNumber = this.activatedRoute.snapshot.params['skillNumber'];
    this.getSkillName(+this.skillNumber);
  }

  getSkillName(skillNumber:number)
  {
    switch(skillNumber)
    {
      case 0.3:{        
        this.addTwoNumbersUpTo5();
        this.previousLocation='gradekg';
        this.operator='+';
        this.numbers=2;
        this.title='Add';
        break;
      }
      case 0.4:{       
        this.addTwoNumbersUpTo10();
        this.previousLocation='gradekg';
        this.operator='+';
        this.numbers=2;
        this.title='Add';
        break;
      }
      case 1.1:{       
        this.addTens();
        this.previousLocation='grade1';
        this.operator='+';
        this.numbers=2;
        this.title='Add';
        break;
      }
      case 1.2:{
        this.addThreeOrMoreNumbersUpto10();
        this.previousLocation='grade1';
        this.operator='+';
        this.numbers=3;
        this.title='Add';
        break;
      }
      case 1.3:{
        this.subtractTens();
        this.previousLocation='grade1';
        this.operator='-';
        this.numbers=2;
        this.title='Subtract';
        break;
      }
      case 1.4:{
        this.subtractOneDigitFromTwoDigitNumber();
        this.previousLocation='grade1';
        this.operator='-';
        this.numbers=2;
        this.title='Subtract';
        break;
      }
      case 2.1:{
        this.addOneDigitNumberToTwoDigitNumber();
        this.previousLocation='grade2';
        this.operator='+';
        this.numbers=2;
        this.title='Add';
        break;
      }
      case 2.2:{
        this.addThreeOrMoreNumbers();
        this.previousLocation='grade2';
        this.operator='+';
        this.numbers=3;
        this.title='Add';
        break;
      }
      case 2.3:{
        this.subtractTensFromTwoDigitNumber();
        this.previousLocation='grade2';
        this.operator='-';
        this.numbers=2;
        this.title='Subtract';
        break;
      }
      case 2.4:{
        this.subtractTwoDigitFromTwoDigit();
        this.previousLocation='grade2';
        this.operator='-';
        this.numbers=2;
        this.title='Subtract';
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

  checkAnswer() {
    var isCorrect: boolean =  false;
    let correctAnswer=0;
    switch(this.operator)
    {
      case '+':{
        correctAnswer=(this.numbers==2)?this.num1+this.num2:this.num1+this.num2+this.num3;
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
    }
    isCorrect = (correctAnswer===+this.answer)?true:false;    
    if (isCorrect) {
      Swal.fire({
        title: 'You are correct',
        text: 'That\'s right answer',
        icon: 'success',
        timer: 1500
      });
      this.correctAnswersCount++;      
      this.getSkillName(+this.skillNumber);
    }
    else {
      Swal.fire({
        title: 'You are wrong',
        text: 'Please try again!',
        icon: 'error',
        timer: 1500
      });
      this.answer = '';    
    }
  }

  getNextQuestion() {
    this.num1 = Math.floor(Math.random() * 10);
    this.num2 = Math.floor(Math.random() * 10);
    this.answer = '';        
  }
  
  ResetGame()
  {
    this.correctAnswersCount=0;
  }

}
