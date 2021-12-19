import { createAction, props } from '@ngrx/store';
import { Inventory } from './inventory.models';

export const getInventories = createAction(
  '[Inventory] Get inventories'
);

export const getInventoriesSuccess = createAction(
  '[Inventory] Get inventories success',
  props<{ inventories: Inventory[] }>()
);
