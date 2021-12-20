import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { InventoryService } from 'src/app/feature/inventory/shared/inventory.service';
import * as InventoryActions from './inventory.actions';

@Injectable()
export class InventoryEffects {
  constructor(
    private actions$: Actions,
    private inventoryService: InventoryService
  ) {}

  // Get inventories
  public getInventories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InventoryActions.getInventories),
      concatMap(() =>
        this.inventoryService.getInventories().pipe(
          map((inventories) => {
            return InventoryActions.getInventoriesSuccess({ inventories });
          })
        )
      )
    );
  });

  // Get total of pending items
  public getTotalPendingItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InventoryActions.getTotalPendingItems),
      concatMap(() =>
        this.inventoryService.getTotalPendingItems().pipe(
          map((total) => {
            return InventoryActions.getTotalPendingItemsSuccess({
              total: total.total,
            });
          })
        )
      )
    );
  });

  // Get inventory detail
  public getInventoryDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InventoryActions.getInventoryDetail),
      concatMap((action) =>
        this.inventoryService.getInventoryDetail(action.inventoryId).pipe(
          map((inventory) => {
            return InventoryActions.getInventoryDetailSuccess({ inventory });
          })
        )
      )
    );
  });

  // Mark item as purchased
  public markItemAsPurchased$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InventoryActions.markItemAsPurchased),
      concatMap((action) =>
        this.inventoryService
          .markItemAsPurchased(action.inventoryId, action.itemId)
          .pipe(
            map(() => {
              return InventoryActions.getInventoryDetail({
                inventoryId: action.inventoryId,
              });
            })
          )
      )
    );
  });

  // Mark item as purchased
  public addNewItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InventoryActions.addNewItem),
      concatMap((action) =>
        this.inventoryService
          .addNewItem(action.inventoryId, action.name, action.quantity)
          .pipe(
            map(() => {
              return InventoryActions.getInventoryDetail({
                inventoryId: action.inventoryId,
              });
            })
          )
      )
    );
  });
}
