import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { InventoryService } from 'src/app/feature/inventory/shared/inventory.service';
import * as InventoryActions from './inventory.actions';

@Injectable()
export class InventoryEffects {

  constructor(
    private actions$: Actions,
    private inventoryService: InventoryService) { }

  // Get inventories
  public getInventories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InventoryActions.getInventories),
      concatMap(() =>
        this.inventoryService.getInventories().pipe(
          map(inventories => {
            return InventoryActions.getInventoriesSuccess({ inventories })
          }),
        )
      )
    );
  });
}
