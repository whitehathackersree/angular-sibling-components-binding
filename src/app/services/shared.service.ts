import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Filter } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  filter: Filter ={search: ""};
  private filterSource = new BehaviorSubject<Filter>(this.filter);
  public currentFilter$ = this.filterSource.asObservable();

  private changeUsersAgeSource = new Subject();
  changeUsersAge$ = this.changeUsersAgeSource.asObservable();

  constructor() { }

  filterChange(filter: Filter){
    this.filterSource.next(filter);
  }

  changeUsersAge(age: number){
    this.changeUsersAgeSource.next(age);
  }
}
