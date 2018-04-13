import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class QuestionHistory {

   constructor (public questionId:string,
                public correctAttempts:number = 0,
                public incorrectAttempts:number = 0
   ){

   }
}

export class SessionSummary {
        constructor(public correct:number, 
                    public incorrect: number){

        }
}

export class SessionDataService {

  currentSession: Subject<SessionSummary> = new BehaviorSubject<SessionSummary>(null);
  sessionSummary: SessionSummary = new SessionSummary(0,0);
  questionHistories:Map<string, QuestionHistory> = new Map<string, QuestionHistory>()
  
  constructor() { 

  }

  addIncorrectAttempt(questionId){

    var questionHistory = this.questionHistories.get(questionId)

    if (!questionHistory){
      this.questionHistories.set(questionId, new QuestionHistory(questionId, 0, 1))
    } else {
      questionHistory.incorrectAttempts += 1
      this.questionHistories.set(questionId, questionHistory)
    }

    this.sessionSummary.incorrect += 1;
  }

  addCorrectAttempt(questionId){

    var questionHistory = this.questionHistories.get(questionId)

    if (!questionHistory){
      this.questionHistories.set(questionId, new QuestionHistory(questionId, 1, 0))
    } else {
      questionHistory.correctAttempts += 1
      this.questionHistories.set(questionId, questionHistory)
    }

    this.sessionSummary.correct += 1
  }

  addAttempt(questionId:string, correct:boolean){
    if (correct)
      this.addCorrectAttempt(questionId);
    else  
      this.addIncorrectAttempt(questionId); 
      
    this.currentSession.next(this.sessionSummary)  
  }

}
