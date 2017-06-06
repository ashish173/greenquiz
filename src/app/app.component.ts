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
  summary = {};
  showSummary = false;

  constructor() {
  }

  onSelected(questionIdx, choiceIdx) {
    this.summary[questionIdx] =
      this.questions[questionIdx].choices[choiceIdx].summary;

    if (questionIdx === this.questions.length - 1) {
      this.showSummary = true;
    }
  }

  reset() {
    this.showSummary = false;
  }

  getSummary() {
    const limit = Object.keys(this.summary).length;
    let summary = '';

    for (let index = 0; index < limit; index++) {
      summary += `${this.summary[index]}`;
    }

    return summary;
  }
}
