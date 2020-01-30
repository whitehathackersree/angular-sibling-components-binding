import { Component, OnInit } from '@angular/core';
import { Filter } from '@app/models';
import { SharedService } from '@app/services';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filter: Filter = {search: ""};
  constructor(private _sharedService: SharedService) { }

  filterSubscription;
  ngOnInit() {
    this.filterSubscription = this._sharedService.currentFilter$.subscribe(filter => this.filter = filter);
  }

  onFilterChange(){
    this._sharedService.filterChange(this.filter);
  }

  ngOnDestroy(){
    this.filterSubscription.unsubscribe();
  }

}
