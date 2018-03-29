import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KatexModule } from 'ng-katex';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { QuestionComponent } from './question/question.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent} from './home/home.component';

import { RouterModule, Routes } from '@angular/router'
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common'
import { QuestionsService } from './questions.service';


const routes: Routes = [

    // basic routes
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'questions', component: QuestionsComponent},
    { path: 'question/:id', component: QuestionComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    QuestionComponent,
    UserItemComponent,
    UserListComponent,
    QuestionsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    KatexModule
  ],
  providers: [
    QuestionsService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
   