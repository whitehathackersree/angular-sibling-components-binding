import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableWithFilterComponent } from './data-table-with-filter.component';

describe('DataTableWithFilterComponent', () => {
  let component: DataTableWithFilterComponent;
  let fixture: ComponentFixture<DataTableWithFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableWithFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableWithFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
