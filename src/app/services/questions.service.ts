import { Injectable } from '@angular/core';
import { Question, Answer} from './../models/question';

@Injectable()
export class QuestionsService {

  public questions: Question[];

  constructor() {

    this.questions = this.createQuestions();
  }

  createQuestions(): Question[] {

    const questions: Question[] = [];

    for (let i = 0; i < 12; i++) {
      questions.push(Question.createRandomFraction() );
    }

    return questions;
  }

}
