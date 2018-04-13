import { Component, OnInit } from '@angular/core';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionsService } from '../../services/questions.service';
import { Question } from '../../models/question';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  animations: [
    trigger('someCoolAnimation', [
      transition ('* => *', [
          query (':enter', style({ opacity: 0})), // hide new items
          query (':enter', stagger('100ms', [animate('1s', style({opacity: 1}))]))
      ], {})
    ])
  ]
})
export class QuestionsComponent implements OnInit {

  questions: Question[];

  constructor(private questionsService: QuestionsService) {
    this.questions = questionsService.questions;
  }

  OnQuestionAttempt() {
    console.log('Clicked from Questions');
  }

  ngOnInit() {
  }

}
