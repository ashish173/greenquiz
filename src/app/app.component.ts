import { Component } from '@angular/core';
import {DUMMY_DATA} from './data/dummy-data';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'bq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  questions = DUMMY_DATA;

  constructor() {
  }
}
