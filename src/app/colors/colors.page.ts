import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.page.html',
  styleUrls: ['./colors.page.scss'],
})
export class ColorsPage implements OnInit {

 backColor:string="" ;
  
  constructor(
    private route:Router
  ) { }

  ngOnInit() {
  }

  changeColor(data:any){
    console.log(data.name);
  this.backColor = data.name;
    
    
  }


  clear(){
    this.backColor = "";
  }
  return(){
    this.route.navigate(['']);
  }

}
