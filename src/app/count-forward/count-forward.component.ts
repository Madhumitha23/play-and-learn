import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-count-forward',
  templateUrl: './count-forward.component.html',
  styleUrls: ['./count-forward.component.css']
})
export class CountForwardComponent implements OnInit {
  numberToStart:number=0;
  answer1:string='';
  answer2:string='';
  answer3:string='';  
  comma:string=' , ';
  correctAnswersCount:number=0;
  @ViewChild('firstBox', { static: false }) firstBox: ElementRef = {} as ElementRef;
  constructor() { 
    
  }

  ngOnInit(): void {
    this.numberToStart = Math.floor(Math.random() * 97)+1;    
  }

  getNextQuestion(){
    this.numberToStart = Math.floor(Math.random() * 97)+1;
    this.answer1 = '';
    this.answer2 = '';
    this.answer3='';   
    
  }

  checkAnswer(){    
    if(+this.answer1 === this.numberToStart+1
      && +this.answer2 === this.numberToStart+2
      && +this.answer3 === this.numberToStart+3)
      {
        Swal.fire({
          title: 'You are correct',
          text: 'That\'s right answer',
          icon: 'success',
          timer: 1500 ,
         
          didClose:()=>{this.firstBox.nativeElement.focus()}                  
        })  
        this.getNextQuestion();
        this.correctAnswersCount++;   
        
      }
      else{
        Swal.fire({
          title: 'You are wrong',
          text: 'Please try again!',
          icon: 'error',
          timer: 1500,
          didClose:()=>{            
            this.firstBox.nativeElement.focus()
          }    
        });
               
      }
  }

  ResetGame(){
    this.correctAnswersCount=0;
    this.firstBox.nativeElement.focus();
  }

  

}
