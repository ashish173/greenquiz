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
  selections = {};
  showSummary = false;
  option = false;
  activeSlideIndex = 0;

  constructor() {
  }

  onSelected(questionIdx, choiceIdx) {
    this.summary[questionIdx] =
      this.questions[questionIdx].choices[choiceIdx].summary;

    this.selections[questionIdx] = choiceIdx;

    if (Object.keys(this.selections).length === this.questions.length) {
      this.activeSlideIndex = 0;
      this.showSummary = true;
    } else {
      // FOR AUTO change question
      if (this.activeSlideIndex === this.questions.length -1 && this.option) {
        this.activeSlideIndex = 0;
      } else if (this.option) {
        this.activeSlideIndex += 1;
      }
    }
  }

  changeActiveSlide(index) {
    this.activeSlideIndex = index;
  }

  resetQuiz() {
    this.showSummary = false;
    this.selections = {};
    this.summary = {};
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
