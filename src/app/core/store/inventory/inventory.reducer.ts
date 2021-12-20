import { createReducer, on } from '@ngrx/store';
import * as InventoryActions from './inventory.actions';
import { Inventory } from './inventory.models';

export const inventoryFeatureKey = 'inventory';

export interface InventoryState {
  inventories: Inventory[];
  selectedInventory: Inventory | null;
  totalPendingItems: number;
}

export const initialState: InventoryState = {
  inventories: [],
  selectedInventory: null,
  totalPendingItems: 0,
};

export const reducer = createReducer(
  initialState,

  on(InventoryActions.getInventoriesSuccess, (state, action) => {
    return {
      ...state,
      inventories: action.inventories,
    };
  }),

  on(InventoryActions.getTotalPendingItemsSuccess, (state, action) => {
    return {
      ...state,
      totalPendingItems: action.total,
    };
  }),

  on(InventoryActions.getInventoryDetailSuccess, (state, action) => {
    return {
      ...state,
      selectedInventory: action.inventory,
    };
  })
);
