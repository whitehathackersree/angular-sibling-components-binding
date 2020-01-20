import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Fruit } from './../fruit';

@Component({
  selector: 'apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.scss']
})
export class AppleComponent implements OnInit {

  @Input() fruit: Fruit;
  @Output() fruitChange: EventEmitter<Fruit> = new EventEmitter<Fruit>();
  constructor() { }

  ngOnInit() {
    if(this.fruit===undefined){
      this.fruit = {"type": "banana family", "sweetness": 0.9}
    }
  }

}
