import { createAction, props } from '@ngrx/store';
import { Inventory } from './inventory.models';

export const getInventories = createAction('[Inventory] Get inventories');

export const getInventoriesSuccess = createAction(
  '[Inventory] Get inventories success',
  props<{ inventories: Inventory[] }>()
);

export const getTotalPendingItems = createAction(
  '[Inventory] Get total pending items'
);

export const getTotalPendingItemsSuccess = createAction(
  '[Inventory] Get total pending items success',
  props<{ total: number }>()
);

export const getInventoryDetail = createAction(
  '[Inventory] Get inventory detail',
  props<{ inventoryId: string | null }>()
);

export const getInventoryDetailSuccess = createAction(
  '[Inventory] Get inventory detail success',
  props<{ inventory: Inventory }>()
);

export const markItemAsPurchased = createAction(
  '[Inventory] Mark item as purchased',
  props<{ inventoryId: string | null; itemId: string }>()
);

export const addNewItem = createAction(
  '[Inventory] Add new item',
  props<{ inventoryId: string | null; name: string; quantity: number }>()
);
