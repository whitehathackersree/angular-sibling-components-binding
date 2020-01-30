import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { FilterComponent } from './components/filter/filter.component';
import { ActionComponent } from './components/action/action.component';
import { DataTableWithFilterComponent } from './components/data-table-with-filter/data-table-with-filter.component';
import { DataTableWithFilterAndActionComponent } from './components/data-table-with-filter-and-action/data-table-with-filter-and-action.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    FilterComponent,
    ActionComponent,
    DataTableWithFilterComponent,
    DataTableWithFilterAndActionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
