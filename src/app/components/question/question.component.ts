import { Question } from './../../models/model';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  state,
  transition,
  trigger,
  style,
  animate
} from '@angular/core';

@Component({
  selector: 'bq-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [
    trigger('flyInLeft', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
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
