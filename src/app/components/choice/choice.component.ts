import { Choice } from './../../models/model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bq-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {
  @Input() choice: Choice;
  @Input() isSelected: Choice;

  constructor() { }

  ngOnInit() {
  }

}
