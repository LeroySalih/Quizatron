import { Injectable } from '@angular/core';
import { Question, Answer} from './question';

@Injectable()
export class QuestionsService {

  public questions:Question[];

  constructor() { 

    this.questions = this.createQuestions()
  }

  createQuestions(): Question[] {

    var questions:Question[] = [
      Question.createRandomFraction(),
      Question.createRandomFraction()

    ]

    return questions;
  }

}
