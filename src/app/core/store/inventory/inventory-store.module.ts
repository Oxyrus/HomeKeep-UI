import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { InventoryEffects } from './inventory.effects';
import { inventoryFeatureKey, reducer } from './inventory.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(inventoryFeatureKey, reducer),
    EffectsModule.forFeature([InventoryEffects])
  ]
})
export class InventoryStoreModule { }
