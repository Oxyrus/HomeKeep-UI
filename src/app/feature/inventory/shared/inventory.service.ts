import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from 'src/app/core/store/inventory/inventory.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private baseUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) { }

  public getInventories(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(`${this.baseUrl}/inventory`);
  }
}
