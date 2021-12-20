import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromInventory from 'src/app/core/store/inventory';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.scss'],
})
export class InventoryDetailComponent implements OnInit {
  public inventory$!: Observable<fromInventory.Inventory | null>;
  public newItemForm!: FormGroup;

  private inventoryId!: string | null;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.newItemForm = this.formBuilder.group({
      name: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
    });

    this.inventoryId = this.route.snapshot.paramMap.get('inventoryId');
    this.store.dispatch(
      fromInventory.getInventoryDetail({ inventoryId: this.inventoryId })
    );
    this.inventory$ = this.store.pipe(
      select(fromInventory.selectInventoryDetail)
    );
  }

  public handleItemPurchased(item: fromInventory.Item): void {
    this.store.dispatch(
      fromInventory.markItemAsPurchased({
        inventoryId: this.inventoryId,
        itemId: item.id,
      })
    );
  }

  public handleAddItem(): void {
    if (this.newItemForm.valid) {
      const name = this.newItemForm.get('name')?.value;
      const quantity = this.newItemForm.get('quantity')?.value;
      this.store.dispatch(
        fromInventory.addNewItem({
          inventoryId: this.inventoryId,
          name,
          quantity,
        })
      );
      this.newItemForm.reset();
    }
  }
}
