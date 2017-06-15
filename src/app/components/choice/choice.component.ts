import { Choice } from './../../models/model';
import { Component, OnInit, Input } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';

@Component({
  selector: 'bq-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
  animations: [
    trigger('selectionState', [
      state('inactive', style({
        boxShadow: '0 1px 3px #aaa',
        border: '1px solid grey',
        padding: '15px'
      })),
      state('active',   style({
        boxShadow: '0 2px 5px #aaa',
        border: '1px solid green',
        padding: '0'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class ChoiceComponent implements OnInit {
  @Input() choice: Choice;
  @Input() isSelected: Choice;
  @Input() drawType: string;

  constructor() { }

  ngOnInit() {
  }

}
