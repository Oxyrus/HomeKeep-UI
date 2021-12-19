import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromInventory from 'src/app/core/store/inventory';

@Component({
  selector: 'app-list-inventories',
  templateUrl: './list-inventories.component.html',
  styleUrls: ['./list-inventories.component.scss']
})
export class ListInventoriesComponent implements OnInit {
  public inventories$!: Observable<fromInventory.Inventory[]>;

  constructor(private store: Store) { }

  public ngOnInit(): void {
    this.store.dispatch(fromInventory.getInventories());
    this.inventories$ = this.store.pipe(select(fromInventory.selectInventories));
  }

}
