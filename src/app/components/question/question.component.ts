import { Question } from './../../models/model';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding
} from '@angular/core';
import {
  trigger,
  animate,
  style,
  transition,
  group,
  query,
  stagger,
  state,
} from '@angular/animations';

@Component({
  selector: 'bq-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        query('.choice', style({ transform: 'translateZ(-500px)', opacity: 0})),
        query('.choice', [
          stagger(100, [
            animate('300ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateZ(80px)', opacity: 1})),
            animate('400ms cubic-bezier(.35,0,.25,1)', style('*'))
          ])
        ])
      ])
    ])
  ]
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() selected: number;
  @Output() selectedChoice = new EventEmitter();

  @HostBinding('@pageAnimation')
  public animatePage = true;

  constructor() { }

  ngOnInit() {
  }

  onClicked(index) {
    this.selectedChoice.emit(index);
  }

}
