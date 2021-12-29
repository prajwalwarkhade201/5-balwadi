import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.page.html',
  styleUrls: ['./poems.page.scss'],
})
export class PoemsPage implements OnInit {

  
  
  constructor(
    private route : Router
  ) { }

  ngOnInit() {
  }

  return(){
    this.route.navigate(['']);
  }
}
