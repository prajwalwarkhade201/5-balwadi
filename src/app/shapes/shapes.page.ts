import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.page.html',
  styleUrls: ['./shapes.page.scss'],
})
export class ShapesPage implements OnInit {

  @ViewChild ('audio') tempAudio :ElementRef;

  curruntAudio:any;
  constructor(
    private route : Router
  ) { }

  ngOnInit() {
  }

  audioObj=[
    {"value":"Tringle","src":"../../assets/shapes/Triangle.mp3" , "imageLink":"https://media3.giphy.com/media/bPGOJHO5b2TwcyR2If/giphy.gif"},
    {"value":"Square","src":"../../assets/shapes/Square.mp3" , "imageLink":"https://cdn.dribbble.com/users/1285274/screenshots/3652505/square.gif"},
    {"value":"Circle","src":"../../assets/shapes/Circle.mp3 " , "imageLink":"https://i.pinimg.com/originals/6d/cb/ae/6dcbaeb03f443f224230e142556b5c36.gif"},
    {"value":"Rectangle","src":"../../assets/shapes/Rectangle.mp3" , "imageLink":"https://i.gifer.com/3XJa.gif"},
    {"value":"Oval","src":"../../assets/shapes/Oval.mp3" , "imageLink":"https://images.squarespace-cdn.com/content/v1/54f8c7a8e4b0259c3fcf796e/1579279619362-5E9VNSC16LUG6DT8C972/FN-GIPHY-Easter-Egg.gif?format=1500w"},
    {"value":"Rhombus","src":"../../assets/shapes/Rhombus.mp3" , "imageLink":"https://britstar.org.uk/wp-content/uploads/2020/08/diamond.gif"},
    {"value":"Hexagon","src":"../../assets/shapes/Hexagon.mp3" , "imageLink":"https://i.gifer.com/SqmF.gif"},
   
    



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
