import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

interface picture{
  imageUrl:string;
  name:string;
}

@Component({
  selector: 'app-count-objects',
  templateUrl: './count-objects.component.html',
  styleUrls: ['./count-objects.component.css']
})
export class CountObjectsComponent implements OnInit {
  objects: picture[]=[];
  correctAnswersCount:number=0;
  choices:number[]=[];
  numberOfChoices:number=4;
  numberOfObjects:number=0;  
  prevNumberOfObjects:number=0;
  maxCountOfObjects:number=0;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.maxCountOfObjects=this.activatedRoute.snapshot.params['maxCount'];
    console.log(this.maxCountOfObjects)
    this.createRandomObjects();  
  }

  createRandomObjects() {
    this.objects = [];    
    this.numberOfObjects = this.getNumberOfObjects();
    while(this.numberOfObjects === this.prevNumberOfObjects)
    {
      this.numberOfObjects = this.getNumberOfObjects();
    }
    this.prevNumberOfObjects = this.numberOfObjects;
    this.choices=this.getRandomChoices(this.numberOfObjects);
    for (let i = 0; i < this.numberOfObjects; i++) {
      let randomObject:picture = {        
        imageUrl: "../../assets/objects/jug.png",
        name: "object" + (i + 1)            
      };
      this.objects.push(randomObject);
    }    
  }

  getNumberOfObjects(){
    return Math.floor(Math.random()*this.maxCountOfObjects)+1;
  }

  getRandomChoices(numberOfObjects:number){
    var randomChoices:number[]=[];     
    const randomIndex =  Math.floor(Math.random() * this.numberOfChoices);
    while(randomChoices.length<this.numberOfChoices)
    {      
      var r=Math.floor(Math.random() * this.maxCountOfObjects) + 1;
      if(!randomChoices.includes(r) && r!=numberOfObjects)
      {
        randomChoices.push(r)
      }
    }
    randomChoices[randomIndex] = numberOfObjects;
    return randomChoices;    
  }

  checkAnswer(event:Event){
    const element = event.target as HTMLElement;
    if(+element.innerText === this.numberOfObjects)
    {
      Swal.fire({
        title: 'You are correct',
        text: 'That\'s right answer',
        icon: 'success',
        timer: 1500
      });
      this.correctAnswersCount++; 
      this.createRandomObjects();
    }
    else
    {
      Swal.fire({
        title: 'You are wrong',
        text: 'Please try again!',
        icon: 'error',
        timer: 1500
      });           
    }    
  }

  ResetGame()
  {
    this.correctAnswersCount=0;
  }

}
