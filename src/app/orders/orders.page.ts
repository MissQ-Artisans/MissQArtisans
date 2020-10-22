import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  @Input() name: string;
  @Input() title: string;
  @Input() sched: string;
  @Input() location: string;
  @Input() rate: string;

  constructor(private navParams: NavParams, private modalController: ModalController) {
    
    // componentProps can also be accessed at construction time using NavParams
    console.log(this.navParams.get('name'));
  }

  ngOnInit() {
  }
  closeModal() { 
    // data null and role cancel
     this.modalController.dismiss( 'cancel'); 
   }

}
