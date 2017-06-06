import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  state,
  transition,
  trigger,
  style,
  animate
} from '@angular/core';

@Component({
  selector: 'bq-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  animations: [
    trigger('flyInDown', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-200%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateY(200%)' }))
      ])
    ])
  ]
})
export class SummaryComponent implements OnInit {
  @Input() summary: string;
  @Output() resetQuiz = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.resetQuiz.emit(true);
  }

}
