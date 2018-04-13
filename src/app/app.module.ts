import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KatexModule } from 'ng-katex';
import * as math from 'mathjs';
import { AppComponent } from './app.component';

import { MaterialModule} from './material.module';

import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {FlexLayoutModule} from '@angular/flex-layout';

import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { QuestionComponent } from './components/question/question.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { HomeComponent} from './components/home/home.component';

import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from '../../firebase.config';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { UserService } from './services/user.service';
import { QuestionsService } from './services/questions.service';
import { SessionDataService } from './services/session-data.service';


const routes: Routes = [

    // basic routes
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginFormComponent},
    { path: 'register', component: RegisterFormComponent},
    { path: 'questions', component: QuestionsComponent},
    { path: 'question/:id', component: QuestionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    QuestionComponent,
    UserItemComponent,
    UserListComponent,
    QuestionsComponent,
    HomeComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    KatexModule,
    AngularFireModule.initializeApp(FirebaseConfig.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    QuestionsService,
    SessionDataService,
    UserService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
