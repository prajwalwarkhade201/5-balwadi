import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  constructor(
    private route : Router
  ) { }

  ngOnInit() {
  }
  
  return(){
    this.route.navigate(['']);
  }
}
