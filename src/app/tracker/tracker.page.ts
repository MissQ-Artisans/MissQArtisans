import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular'; 
import { ModalController } from '@ionic/angular';

import {OrdersPage } from '../orders/orders.page';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage implements OnInit {
  orders: string = "ongoing";
  isAndroid: boolean = false;
  dataFromModal;
  JobTitle : "Tutor";

  constructor(platform: Platform, private modalController: ModalController) {
    this.isAndroid = platform.is('android');
  }

  ngOnInit() {
  }

  
  async order() {
    const modal = await this.modalController.create({
      component: OrdersPage,
      componentProps: { name: 'Jessa Mae Yosores', title: 'Massage', sched: 'On or Before Agust 24', location: "Sa Amua", rate: "75%" },
      cssClass: 'setting-modal',
      backdropDismiss: false,
    });

    modal.present();
    this.dataFromModal = await modal.onWillDismiss();
  }


}
