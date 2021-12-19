import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListInventoriesComponent } from './pages/list-inventories/list-inventories.component';

const routes: Routes = [
  {
    path: '',
    component: ListInventoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
