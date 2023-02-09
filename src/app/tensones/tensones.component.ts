import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tensones',
  templateUrl: './tensones.component.html',
  styleUrls: ['./tensones.component.css']
})
export class TensonesComponent implements OnInit {
  numberToStart:number=0;
  answer1:string='';
  answer2:string='';
  correctAnswersCount:number=0;
  
  @ViewChild('firstBox', { static: false }) firstBox: ElementRef = {} as ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.numberToStart = Math.floor(Math.random() * 20)+1;    
  }
  
  getNextQuestion(){
    this.numberToStart = Math.floor(Math.random() * 20)+1;
    this.answer1 = '';
    this.answer2 = '';   
  }

  checkAnswer(){   
    console.log(Math.floor(25/10) )
    console.log(this.numberToStart%10) 
    if(+this.answer1 === Math.floor(this.numberToStart/10)
      && +this.answer2 === this.numberToStart%10
      )
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
