import {Action} from '@ngrx/store';
import {IUser} from '../../User';

export const LOGIN = '[LOGIN]  LOGIN';
export const LOGIN_SUCCESS = '[LOGIN]  LOGIN Success';
export const LOGIN_FAIL = '[LOGIN]  LOGIN Fail';

export const LOGOUT = '[LOGOUT]  LOGOUT';
export const LOGOUT_SUCCESS = '[LOGOUT]  LOGOUT Success';
export const LOGOUT_FAIL = '[LOGOUT]  LOGOUT Fail';


//---------------------------------------------- Actions de Logar ------------------------------

export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor() {
  }
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: any) {
  }
}

export class LoginFailAction implements Action {
  readonly type = LOGIN_FAIL;

  constructor(public payload: any) {}
}

//---------------------------------------------- Actions de Logout ------------------------------

export class LogoutAction implements Action {
  readonly type = LOGOUT;
}

export class LogoutSuccessAction implements Action {
  readonly type = LOGOUT_SUCCESS;
}

export class LogoutFailAction implements Action {
  readonly type = LOGOUT_FAIL;

  constructor(public payload: any) {
  }
}

//---------------------------------------------- User Actions Types ------------------------------

export type UserActionsTypes =
  | LoginAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction
  | LogoutSuccessAction
  | LogoutFailAction


