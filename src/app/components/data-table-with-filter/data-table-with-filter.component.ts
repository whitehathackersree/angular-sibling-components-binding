import { Component, OnInit } from '@angular/core';
import { SharedService } from '@app/services';

@Component({
  selector: 'data-table-with-filter',
  templateUrl: './data-table-with-filter.component.html',
  styleUrls: ['./data-table-with-filter.component.scss'],
  providers: [SharedService]
})
export class DataTableWithFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
