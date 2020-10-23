import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {OrdersPage } from '../orders/orders.page';

@Component({
  selector: 'app-job-orders',
  templateUrl: './job-orders.page.html',
  styleUrls: ['./job-orders.page.scss'],
})
export class JobOrdersPage implements OnInit {

  dataFromModal;
  constructor(private modalController: ModalController) { }

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
