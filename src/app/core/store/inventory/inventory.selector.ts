import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInventory from './inventory.reducer';

export const selectInventoryState = createFeatureSelector<fromInventory.InventoryState>(
  fromInventory.inventoryFeatureKey
);

export const selectInventories = createSelector(selectInventoryState, state => {
  return state.inventories;
});
