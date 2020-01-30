import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableWithFilterAndActionComponent } from './data-table-with-filter-and-action.component';

describe('DataTableWithFilterAndActionComponent', () => {
  let component: DataTableWithFilterAndActionComponent;
  let fixture: ComponentFixture<DataTableWithFilterAndActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableWithFilterAndActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableWithFilterAndActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
