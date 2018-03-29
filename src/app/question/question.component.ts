import { Component, OnInit, Input } from '@angular/core';
import {trigger, transition, style, state, animate, query, stagger} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../question'
import { QuestionsService } from '../questions.service'
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  animations: [
    /*
  ]
    trigger('backgroundState', [
      state('red', style({backgroundColor: 'red', transform: 'translate3d(0,0,0)'})),
      state('green', style({backgroundColor: 'green', transform: 'translate3d(100%,0,0)'})),
      transition ('red => green', animate('.3s')),
      transition ('green => red', animate('.3s')),
 ])
      
      
    */
   

  ]
})
export class QuestionComponent implements OnInit {

  @Input() question:Question 
  
  equation:string; 
  backgroundState:string;
  displayMode:string;
  id:string;

  constructor(private router:Router,
              private route:ActivatedRoute,
              private questionService:QuestionsService
            ) { 
    this.backgroundState = 'green'; 
    this.displayMode = 'Summary'

    

  }

  ngOnInit() {

    if (!this.question) {
      console.log('No Question Passed, loading from service')
      this.route.params.subscribe(
        params => {
          console.log(`received params ${params['id']}`)
          this.displayMode = 'FullQuestion'
          this.id = params['id'];
  
          var questions = this.questionService.questions;
          
          var question = questions.find((q) => {
            console.log(`param ID: ${this.id}`)
            console.log(`checking ${q.id}`)
            var id:string = q.id
            return id == this.id
          })
          if (!question){
            console.log('No Question Found')
          } else {
            console.log(`Found Question ${question.id}`)
            this.question = question
          }
          
        }
      )
    }
    
  }

  OnClick(){
    this.backgroundState = (this.backgroundState == 'red' ? 'green' : 'red')
    this.router.navigate(['/question', this.question.id])    
    console.log("Clicked")
  }

}
