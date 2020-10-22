import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobOrdersPageRoutingModule } from './job-orders-routing.module';

import { JobOrdersPage } from './job-orders.page';
import {OrdersPage} from '../orders/orders.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobOrdersPageRoutingModule
  ],
  declarations: [JobOrdersPage,OrdersPage]
})
export class JobOrdersPageModule {}
