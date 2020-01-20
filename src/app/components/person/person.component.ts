import { Component, OnInit, Input } from '@angular/core';
import { Fruit } from './../fruit';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  private _fruit: Fruit
  @Input() set fruit(val: Fruit){
    this._fruit = val;
    console.log("setter called inside fruit")
  }
  get fruit(): Fruit{
    return this._fruit;
  }

  constructor() { }

  ngOnInit() {
  }

}
