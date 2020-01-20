import { Component } from '@angular/core';
import { Fruit } from './components/fruit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'err';
  fruit: Fruit = {};
}
