import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInventoriesComponent } from './list-inventories.component';

describe('ListInventoriesComponent', () => {
  let component: ListInventoriesComponent;
  let fixture: ComponentFixture<ListInventoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInventoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInventoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
