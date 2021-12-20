import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  Inventory,
  InventoryTotalPendingItems,
} from 'src/app/core/store/inventory';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private baseUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) {}

  public getInventories(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(`${this.baseUrl}/inventory`);
  }

  public getTotalPendingItems(): Observable<InventoryTotalPendingItems> {
    return this.http.get<InventoryTotalPendingItems>(
      `${this.baseUrl}/inventory/total-pending`
    );
  }

  public getInventoryDetail(inventoryId: string | null): Observable<Inventory> {
    return this.http.get<Inventory>(`${this.baseUrl}/inventory/${inventoryId}`);
  }

  public addNewItem(
    inventoryId: string | null,
    name: string,
    quantity: number
  ): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/inventory/${inventoryId}/item`,
      {
        inventoryId,
        name,
        quantity,
      }
    );
  }

  public markItemAsPurchased(
    inventoryId: string | null,
    itemId: string
  ): Observable<any> {
    return this.http.patch<any>(
      `${this.baseUrl}/inventory/${inventoryId}/item/${itemId}`,
      null
    );
  }
}
