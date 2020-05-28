import {LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, LOGOUT_FAIL, LOGOUT_SUCCESS, UserActionsTypes} from '../actions/user.action';

export interface UserState {
  Loading: boolean;
  Loaded: boolean;
  isAuthenticated: boolean;
  usuario: any;
}

const initializeState: UserState = {
  Loading: false,
  Loaded: true,
  isAuthenticated: false,
  usuario: {}
};

export function UserReducer(
  state: UserState = initializeState,
  action: UserActionsTypes
) {

  switch (action.type) {
    // --------------------------------------------------
    //                   LOGAR
    // --------------------------------------------------
    case LOGIN:
      return {...state, Loaded: false, Loading: true};

    case LOGIN_SUCCESS: {
      const user = action.payload;
      return {
        ...state,
        usuario: user,
        isAuthenticated: true,
        Loaded: true,
        Loading: false
      };
    }

    case LOGIN_FAIL:
      return {...state, Loaded: false, Loading: false};

    // --------------------------------------------------
    //                       LOGOUT
    // --------------------------------------------------
    case LOGOUT: {
      return {...state, Loaded: false, Loading: true};
    }

    case LOGOUT_SUCCESS: {
      return {...state, Loaded: false, Loading: false, isAuthenticated: false, usuario: {}};
    }

    case LOGOUT_FAIL:
      return {...state, Loaded: false, Loading: false};

    default:
      return state;
  }
}

