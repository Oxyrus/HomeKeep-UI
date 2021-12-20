import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ListInventoriesComponent } from './pages/list-inventories/list-inventories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InventoryDetailComponent } from './pages/inventory-detail/inventory-detail.component';


@NgModule({
  declarations: [
    ListInventoriesComponent,
    InventoryDetailComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule
  ]
})
export class InventoryModule { }
