import {TarefaReducer, TarefaState} from './tarefa.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {UserReducer, UserState} from './user.reducer';

export interface coreState {
  tarefas_store : TarefaState;
  autenticacao: UserState
}

export const globalReducer : ActionReducerMap<coreState> = {
  tarefas_store : TarefaReducer,
  autenticacao: UserReducer
}

export const getCoreState = createFeatureSelector<coreState>('core')
