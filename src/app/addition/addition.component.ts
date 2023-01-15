import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {  
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 10);
  answer: string = '';
  correct = false;
  currentLevel: number = 1;
  correctAnswersCount=0;
  boxInnerCount : string='';
  constructor() { }

  ngOnInit(): void {
    
  }
  checkAnswer() {
    if (+this.answer === this.num1 + this.num2) {
      Swal.fire({
        title: 'You are correct',
        text: 'That\'s right answer',
        icon: 'success',
        timer: 1500
      });
      this.correctAnswersCount++;      
      this.getNextQuestion();
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
    this.correct = false;
  }

  goToNextLevel(){
    this.currentLevel++;
    this.correctAnswersCount=0;
  }
}
