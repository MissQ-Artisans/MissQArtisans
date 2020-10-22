import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular'; 

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage implements OnInit {
  orders: string = "ongoing";
  isAndroid: boolean = false;
 
  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  ngOnInit() {
  }

}
