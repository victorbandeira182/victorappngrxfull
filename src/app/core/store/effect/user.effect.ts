import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LoginFailAction,
  LoginSuccessAction,
  LOGOUT, LOGOUT_SUCCESS,
  LogoutAction,
  LogoutFailAction,
  LogoutSuccessAction
} from '../actions/user.action';

import {auth} from 'firebase/app';
import {from, of} from 'rxjs';
import {catchError, map, mapTo, switchMap, tap} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';


@Injectable()
export class UserEffect {

  constructor(
    private actions$: Actions,
    public afauth: AngularFireAuth,
    private router: Router,
  ) {
  }

  @Effect()
  userlogin$ = this.actions$.pipe(
    ofType(LOGIN),
    switchMap(() => from(this.afauth.auth.signInWithPopup(new auth.GoogleAuthProvider())).pipe(
      map((data) => new LoginSuccessAction({ name: data.user.displayName, email: data.user.email })),
      catchError(error => of(new LoginFailAction(error)))
      )
    ));

  @Effect({dispatch: false})
  userLoginSucess$ = this.actions$.pipe(
    ofType(LOGIN_SUCCESS),
    map(() => {
      this.router.navigate(['core/home']);
    })
  );

  @Effect()
  userLogout$ = this.actions$.pipe(
    ofType(LOGOUT),
    switchMap(() => from(this.afauth.auth.signOut()).pipe(
      map(() => new LogoutSuccessAction()),
      catchError(error => of(new LogoutFailAction(error)))
      )
    ));

  @Effect({dispatch: false})
  userLogoutSucess$ = this.actions$.pipe(
    ofType(LOGOUT_SUCCESS),
    map(() => {
      this.router.navigate(['core/login']);
    })
  );
}








