import { Question } from './../../models/model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bq-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  constructor() { }

  ngOnInit() {
  }

}
