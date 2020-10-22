import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';



@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.page.html',
  styleUrls: ['./new-order.page.scss'],
})
export class NewOrderPage implements OnInit {
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
