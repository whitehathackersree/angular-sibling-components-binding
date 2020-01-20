import { Component, OnInit, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Fruit } from './../fruit';

@Component({
  selector: 'apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.scss']
})
export class AppleComponent implements OnInit {

  @Input() fruit: Fruit;
  @Output() fruitChange: EventEmitter<Fruit> = new EventEmitter<Fruit>();
  constructor() {}

  ngOnInit() {
    if(this.fruit===undefined){
      this.fruit = {type: "apple", sweetness: 0.5};
      this.fruitChange.emit(this.fruit)
    }
  }

}
