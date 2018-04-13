import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SessionSummary, SessionDataService } from './services/session-data.service';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { UserService } from './services/user.service';

// import { UserProfile } from './user-profile';
class Session {
  constructor(public created: string) {

  }
}

interface Note {
  content: string;
  id?: string;
}

interface UserProfile {
    id?: string;
    authenticationId: string;
    name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userProfile: UserProfile;

  sessions: Session[];

  title = 'app';
  sessionSummary: SessionSummary = new SessionSummary(0, 0);

  constructor(private router: Router,
            private sessionDataService: SessionDataService,
            private userService: UserService,
            public afAuth: AngularFireAuth,
            public db: AngularFirestore
          ) {
            console.log(`[AppComponent::constructor]Starting`);
            this.userService.currentUser$.subscribe((userProfile) => {
              console.log('[appComponent::Constructor] received userProfile ', userProfile);
              this.userProfile = userProfile;
            });

  } // end constructor


  ngOnInit () {
  }

  onLogoClick() {
    this.router.navigate(['/home']);
  }
  onLogInClick() {
    this.router.navigate(['/login']);
  }

  onLogOutClick() {
      this.userService.logOut()
      .then(() => {this.router.navigate(['/home']); });
  }

}
