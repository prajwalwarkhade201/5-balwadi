import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alphabets',
  templateUrl: './alphabets.page.html',
  styleUrls: ['./alphabets.page.scss'],
})
export class AlphabetsPage implements OnInit {

  @ViewChild ('audio') tempAudio :ElementRef;

  curruntAudio:any;
  constructor( 
    private route : Router
    ) {}

  ngOnInit() {
  }

  audioObj=[
    {"value":"A","src":"../../assets/alphabets/A.mp3" , "imageLink":"https://classroomclipart.com/images/gallery/Animations/Alphabets/a-apple-animated-alphabet.gif"},
    {"value":"B","src":"../../assets/alphabets/B.mp3" , "imageLink":"https://classroomclipart.com/images/gallery/Animations/Alphabets/b-bike-animated-alphabet.gif"},
    {"value":"C","src":"../../assets/alphabets/C.mp3" , "imageLink":"https://classroomclipart.com/images/gallery/Animations/Alphabets/c-car-animated-alphabet.gif"},
    {"value":"D","src":"../../assets/alphabets/D.mp3" , "imageLink":"https://classroomclipart.com/images/gallery/Animations/Alphabets/d-is-for-dog-animation.gif"},
    {"value":"E","src":"../../assets/alphabets/E.mp3" , "imageLink":"https://i.pinimg.com/originals/2e/c5/8a/2ec58aef4c751547fd5d694f48a2189e.gif"},
    {"value":"F","src":"../../assets/alphabets/F.mp3" , "imageLink":"https://classroomclipart.com/images/gallery/Animations/Alphabets/f-flowers-animated-alphabet.gif"},
    {"value":"G","src":"../../assets/alphabets/G.mp3" , "imageLink":"https://classroomclipart.com/images/gallery/Animations/Alphabets/g-giraffe-animated-alphabet.gif"},
    {"value":"H","src":"../../assets/alphabets/H.mp3" , "imageLink":"https://i.pinimg.com/originals/13/4b/32/134b32c4126969da4b0da58f68e297df.gif"},
    
    {"value":"I","src":"../../assets/alphabets/I.mp3" , "imageLink":"https://classroomclipart.com/images/gallery/Clipart/Alphabets/letter_alphabet_chalkboard_i_icecream_09_clipart.jpg"},
    {"value":"J","src":"../../assets/alphabets/J.mp3" , "imageLink":"https://i.pinimg.com/originals/5a/d5/ef/5ad5efa2900d282129112406efe05413.gif"},
    {"value":"K","src":"../../assets/alphabets/K.mp3" , "imageLink":"https://classroomclipart.com/images/gallery/Animations/Alphabets/k-king-animated-alphabet.gif"},
    {"value":"L","src":"../../assets/alphabets/L.mp3" , "imageLink":"https://i.pinimg.com/originals/f6/f2/41/f6f241b507add2f539f8eed28190d16f.gif"},


    {"value":"M","src":"../../assets/alphabets/M.mp3" , "imageLink":"https://classroomclipart.com/images/gallery/Animations/Alphabets/m-monkey-animated-alphabet.gif"},
    {"value":"N","src":"../../assets/alphabets/N.mp3" , "imageLink":"https://i.pinimg.com/originals/b3/d5/aa/b3d5aa248420c3b00fb072aa46906e72.gif"},
    {"value":"O","src":"../../assets/alphabets/O.mp3" , "imageLink":"https://i.pinimg.com/originals/ee/ff/d5/eeffd5c007cbcae908682f561f2a4c53.gif"},
    {"value":"P","src":"../../assets/alphabets/P.mp3" , "imageLink":"https://classroomclipart.com/images/gallery/Animations/Alphabets/p-penguin-animated-alphabet.gif"},
    {"value":"Q","src":"../../assets/alphabets/Q.mp3" , "imageLink":"https://classroomclipart.com/images/gallery/Animations/Alphabets/q-quill-animated-alphabet.gif"},
    {"value":"R","src":"../../assets/alphabets/R.mp3" , "imageLink":"https://classroomclipart.com/images/gallery/Animations/Alphabets/r-reading-animated-alphabet.gif"},
    {"value":"S","src":"../../assets/alphabets/S.mp3" , "imageLink":"https://classroomclipart.com/images/gallery/Animations/Alphabets/s-sandcastle-animated-alphabet.gif"},
    {"value":"T","src":"../../assets/alphabets/T.mp3" , "imageLink":"https://i.pinimg.com/originals/2c/bb/8a/2cbb8a1843c851267f76c67154f0353b.gif"},
    {"value":"U","src":"../../assets/alphabets/U.mp3" , "imageLink":"https://i.pinimg.com/originals/60/b9/db/60b9db9e7b875bc177d0040e9ae1b7b0.gif"},
    {"value":"V","src":"../../assets/alphabets/V.mp3" , "imageLink":"https://classroomclipart.com/images/gallery/Animations/Alphabets/v-vegetables-animated-alphabet.gif"},
    {"value":"W","src":"../../assets/alphabets/W.mp3" , "imageLink":"https://i.pinimg.com/originals/ed/8a/4e/ed8a4edb7cdd3fe21e10fe5879c44dbf.gif"},
    {"value":"X","src":"../../assets/alphabets/X.mp3" , "imageLink":"https://classroomclipart.com/images/gallery/Animations/Alphabets/x-xylophone-animated-alphabet.gif"},
    {"value":"Y","src":"../../assets/alphabets/Y.mp3" , "imageLink":"https://lh3.googleusercontent.com/proxy/d3wgILYOZZpRZa1WNgOz0BVD1JThWtLIIEyo0sTvtc2YHA8EFUX37TjHCu5rxVphPJI1WEb6CoEL4byajZyDPbsUdk1Dx7pv-B6DubFq7jHEPQB_aIAs5q6-SO1U3JuJzC2MXqsPOb7tuPkcjKPww0ffnyN4ylFc9X4043BUnYYLaNdOx8b4fMOENAwUFSo"},
    {"value":"Z","src":"../../assets/alphabets/Z.mp3" , "imageLink":"https://classroomclipart.com/images/gallery/Animations/Alphabets/z-zebra-animated-alphabet.gif"},
    



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
