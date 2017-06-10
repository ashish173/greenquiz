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
        query('.choices .choice', style({ transform: 'translateZ(-500px)', opacity: 0})),
        query('.choices', [
          stagger(800, [
            query('.choice', [
              stagger(200, [
                animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
              ])
            ])
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
