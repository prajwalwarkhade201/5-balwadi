import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private route : Router
  ) {}


  numbers(){
     this.route.navigate(['numbers'])
  
  }

  alphabets(){
    this.route.navigate(['alphabets']);
  }

  shapes(){
    this.route.navigate(['shapes']);

  }

  colors(){
    this.route.navigate(['colors']);

  }

  videos(){
    this.route.navigate(['videos']);
  }


  poems(){
    this.route.navigate(['poems']);

  }
}
