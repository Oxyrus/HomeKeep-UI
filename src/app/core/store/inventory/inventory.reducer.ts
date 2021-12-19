import { createReducer, on } from '@ngrx/store';
import * as InventoryActions from './inventory.actions';
import { Inventory } from './inventory.models';

export const inventoryFeatureKey = 'inventory';

export interface InventoryState {
  inventories: Inventory[];
  selectedInventory: Inventory | null;
};

export const initialState: InventoryState = {
  inventories: [],
  selectedInventory: null
};

export const reducer = createReducer(
  initialState,

  on(InventoryActions.getInventoriesSuccess, (state, action) => {
    return {
      ...state,
      inventories: action.inventories
    }
  }),
);
