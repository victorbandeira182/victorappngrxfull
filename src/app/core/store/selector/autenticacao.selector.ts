import {createSelector} from '@ngrx/store';
import {coreState, getCoreState} from '../reducer/global.reducer';
import {UserState} from '../reducer/user.reducer';

export const selectUserState = createSelector(getCoreState,  (state: coreState) => {
  return state.autenticacao;
});


export const getUsuarioAutenticado = createSelector(
  selectUserState,
  (user: UserState) => user.usuario
);
