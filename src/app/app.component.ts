import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Fruit } from './components/fruit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'err';
  fruit: Fruit;

  constructor(private _cdRef: ChangeDetectorRef){}

  ngOnInit(){
    this._cdRef.detectChanges();
  }

}
