import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {trigger, transition, style, state, animate, query, stagger} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../../models/question';
import { QuestionsService } from '../../services/questions.service';
import { SessionDataService} from '../../services/session-data.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  animations: []
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  @Output() questionAttempt: EventEmitter<{id: string, correct: boolean}>;

  equation: string;
  backgroundState: string;
  displayMode: string;
  id: string;
  status: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private questionService: QuestionsService,
              private sessionDataService: SessionDataService,
            ) {
    this.backgroundState = 'green';
    this.displayMode = 'Summary';
    this.status = 'unanswered';
    this.questionAttempt = new EventEmitter<{id: string, correct: boolean}>();
    this.questionAttempt.subscribe((event => {console.log(`Event Detected ${JSON.stringify(event)}`); }));

  }

  ngOnInit() {

    if (!this.question) {
      console.log('No Question Passed, loading from service');
      this.route.params.subscribe(
        params => {
          console.log(`received params ${params['id']}`);
          this.displayMode = 'FullQuestion';
          this.id = params['id'];
          const questions = this.questionService.questions;
          const question = questions.find((q) => {
            console.log(`param ID: ${this.id}`);
            console.log(`checking ${q.id}`);
            const id: string = q.id;
            return id === this.id;
          });
          if (!question) {
            console.log('No Question Found');
          } else {
            console.log(`Found Question ${question.id}`);
            this.question = question;
          }
        }
      );
    }
  }

  OnClick() {
    this.backgroundState = (this.backgroundState === 'red' ? 'green' : 'red');
    this.router.navigate(['/question', this.question.id]);
    console.log('Clicked from OnClick');
  }

  onSubmit(value) {
    this.status = (this.question.checkAnswer(value.answer1, value.answer2)) ? 'correct' : 'incorrect';
    this.questionAttempt.emit({id: this.id, correct: (this.status === 'correct')} );
    this.sessionDataService.addAttempt(this.id, (this.status === 'correct'));
    console.log('Event raised from OnSubmit.');
    return false;
    }

}
