import { Component } from '@angular/core';
import { Filter } from '@app/models';
import { SharedService } from '@app/services';

@Component({
  selector: 'action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent{

  filter: Filter;
  constructor(private _sharedService: SharedService) { }

  filterSubscription;
  ngOnInit(){
    this.filterSubscription = this._sharedService.currentFilter$.subscribe(val => this.filter = val);
  }

  ngOnDestroy(){
    this.filterSubscription.unsubscribe();
  }
}
