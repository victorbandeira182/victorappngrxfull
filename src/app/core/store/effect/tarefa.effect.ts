import {Injectable} from '@angular/core';

import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

import {Tarefa} from '../../components/add-tarefa/Tarefa';

import {Actions, Effect, ofType} from '@ngrx/effects';


import {
  GetTarefaSuccessAction,
  GetTarefaFailAction,

  CreateTarefaSuccessAction,
  CreateTarefaFailAction,

  GET_TAREFA,
  CREATE_TAREFA,
  UPDATE_TAREFA,
  DELETE_TAREFA, DeleteTarefaSuccessAction, DeleteTarefaFailAction, UpdateTarefaSuccessAction, UpdateTarefaFailAction

} from '../actions/tarefa.action';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {from, Observable, of} from 'rxjs';
import {map, catchError, pluck, exhaustMap, switchMap} from 'rxjs/operators';


@Injectable()
export class TarefaEffect {
  tarefasCollection: AngularFirestoreCollection<Tarefa>;
  tarefas$: Observable<Tarefa[]>;


  constructor(
    private actions$: Actions,
    private db: AngularFirestore,
  ) {
  }


  // -------------------------------------------GET----------------------------------------------
  @Effect()
  gettarefas$ = this.actions$.pipe(
    ofType(GET_TAREFA),
    switchMap(() => this.db.collection('/tarefas').valueChanges().pipe(
      map((tarefas: Tarefa[]) => new GetTarefaSuccessAction(tarefas)),
      catchError((error) => of(new GetTarefaFailAction(error)))
      )
    ));

  // -------------------------------------------CREATE----------------------------------------------
  @Effect()
  createTarefa$ = this.actions$.pipe(
    ofType(CREATE_TAREFA),
    pluck('payload'),
    exhaustMap((tarefa: Tarefa) => {
      const id = this.db.createId();
      return from(this.db.doc(`/tarefas/${id}`).set({id, ...tarefa})).pipe(
        map(() => new CreateTarefaSuccessAction()),
        catchError((error) => of(new CreateTarefaFailAction(error)))
      );
    })
  );
  // -------------------------------------------DELETE----------------------------------------------
 @Effect()
  deleteTarefa$ = this.actions$.pipe(
    ofType(DELETE_TAREFA),
    pluck('payload'),
    exhaustMap((payload: Tarefa) =>
      from(this.db.doc(`/tarefas/${payload.id}`).delete()).pipe(
      map(() => new DeleteTarefaSuccessAction()),
      catchError((error) => of(new DeleteTarefaFailAction(error)))
    ))
  );

  // -------------------------------------------UPDATE----------------------------------------------

  @Effect()
  updateTodo$ = this.actions$.pipe(
    ofType(UPDATE_TAREFA),
    pluck('payload'),
    exhaustMap((payload: Tarefa) => from(this.db.doc(`/tarefas/${payload.id}`)
      .set( Object.assign({}, payload), { merge: true } )).pipe(
      map(() => new UpdateTarefaSuccessAction()),
      catchError((error) => of(new UpdateTarefaFailAction(error)))
    ))
  );


}
