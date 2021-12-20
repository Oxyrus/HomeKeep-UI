export interface Inventory {
  id: string;
  name: string;
  items: Item[] | undefined;
}

export interface Item {
  id: string;
  name: string;
  quantity: number;
  purchased: boolean;
}

export interface InventoryTotalPendingItems {
  total: number;
}

export interface NewItem {
  inventoryId: string;
  name: string;
  quantity: number;
}
