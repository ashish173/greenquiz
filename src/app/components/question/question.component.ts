import { Question } from './../../models/model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bq-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() selected: number;
  @Output() selectedChoice = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClicked(index) {
    this.selectedChoice.emit(index);
  }

}
