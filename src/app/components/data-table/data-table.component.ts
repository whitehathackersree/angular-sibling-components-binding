import { Component, OnInit, Inject, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import * as users_ from '@app/data/users.json';
import { User, Filter } from '@app/models';
import { SharedService } from '@app/services';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  users: User[] = (users_ as any).default;
  private _filter: Filter
  @Input() set filter(val: Filter){
    this._filter = val;
    console.log("setter called inside filter")
  }
  get filter(): Filter{
    return this._filter;
  }

  constructor(
    private _cdRef: ChangeDetectorRef,
    @Inject(SharedService) private _sharedService: SharedService
  ) { }

  filterSubscription;
  ngOnInit(): void{
    this.filterSubscription = this._sharedService.currentFilter$.subscribe(val => this.filter = val);
  }

  ngOnDestroy(){
    this.filterSubscription.unsubscribe();
  }

}
