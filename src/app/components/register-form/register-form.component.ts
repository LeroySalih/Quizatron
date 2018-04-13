import { Component, OnInit } from '@angular/core';


import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  db: any = {};

  constructor( private userService: UserService) {
  }

  ngOnInit() {
  }

  onSubmit(form: any) {
    this.userService.createUser(form);
  }

}
