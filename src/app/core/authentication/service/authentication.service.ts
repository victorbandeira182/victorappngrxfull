import {Injectable, NgZone} from '@angular/core';
import {Router} from '@angular/router';

// Firebase
import {auth} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';

// RxJS
import {map} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    public zone: NgZone) {
	}

	//------------------------------------------------------------------------------------
	//                                   G O O G L E
	//------------------------------------------------------------------------------------

  user = this.afAuth.authState.pipe(
  	map(authState => {
  		if (!authState) {
  			return null;
  		} else {
  			return auth.GoogleAuthProvider;
  		}
  	})
  );

  signinWithGoogle() {
  	this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  		.then(() => {
  			console.log('User have been successfully logged in!');
  			this.zone.run(() => {
  				this.router.navigate(['core/home']); // tela da tarefa
  			});
  		}).catch((err) => {
  			console.log(err);
  		});
  }

  //------------------------------------------------------------------------------------
  //                                   S I G O U T
  //------------------------------------------------------------------------------------

  signout() {
  	this.afAuth.auth.signOut()
  		.then(() => {
  			console.log('You have been successfully logged out!');
  			this.router.navigate(['/login']); // tela de login
  		}).catch((err) => {
  			console.log(err);
  		});
  }
}
