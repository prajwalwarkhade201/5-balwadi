import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.page.html',
  styleUrls: ['./numbers.page.scss'],
})
export class NumbersPage implements OnInit {

  @ViewChild ('audio') tempAudio :ElementRef;

  curruntAudio:any;
  constructor(
    private route : Router
  ) { }

  ngOnInit() {
  }

  audioObj=[
    {"value":"zero","src":"../../assets/zero-speech.mp3"},
    {"value":"one","src":"../../assets/one-speech.mp3"},
    {"value":"two","src":"../../assets/two-speech.mp3"},
    {"value":"three","src":"../../assets/three-speech.mp3"},
    {"value":"four","src":"../../assets/four-speech.mp3"},
    {"value":"five","src":"../../assets/five-speech.mp3"},
    {"value":"six","src":"../../assets/six-speech.mp3"},
    {"value":"seven","src":"../../assets/seven-speech.mp3"},
    {"value":"eight","src":"../../assets/eight-speech.mp3"},
    {"value":"nine","src":"../../assets/nine-speech.mp3"},


  ]


  PlayAudio(data:string){

    console.log(data);
    

    this.audioObj.forEach((val:any)=>{
      
      if (data == val.value) {
        console.log(val.src);
        this.curruntAudio = val.src;            
      }
      
    })
   
    setTimeout(() => {
    this.tempAudio.nativeElement.play();      
    }, 500);
  }



  return(){
    this.route.navigate(['']);
  }
}
