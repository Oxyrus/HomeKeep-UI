import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryDetailComponent } from './pages/inventory-detail/inventory-detail.component';
import { ListInventoriesComponent } from './pages/list-inventories/list-inventories.component';

const routes: Routes = [
  {
    path: '',
    component: ListInventoriesComponent
  },
  {
    path: 'detail/:inventoryId',
    component: InventoryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
