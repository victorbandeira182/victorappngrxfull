import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Tarefa} from './Tarefa';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {CreateTarefaAction, GetTarefaAction} from '../../../store/actions/tarefa.action';
import {select, Store} from '@ngrx/store';
import {getTarefas} from '../../../store/selector/tarefa.selector';
import {TarefaState} from '../../../store/reducer/tarefa.reducer';


@Component({
	selector: 'app-add-tarefa-dialog',
	templateUrl: './add-tarefa-dialog.component.html',
	styleUrls: ['./add-tarefa-dialog.component.css']
})
export class AddTarefaDialogComponent implements OnInit {
  tarefasCollection: AngularFirestoreCollection<Tarefa>;
  tarefas$: Observable<Tarefa[]>;
  form = new FormGroup({
  	titulo: new FormControl,
  	notas: new FormControl,
  });



  ngOnInit() {
    this.store.dispatch(new GetTarefaAction());
    this.tarefas$ = this.store.pipe(select(getTarefas))


  }

  constructor(private db: AngularFirestore,
              public dialogRef: MatDialogRef<AddTarefaDialogComponent>,
              private store : Store<TarefaState>
  ) {
  }

  onNoClick(): void {
  	this.dialogRef.close();
  }

  onSubmit(tarefa) {
  	this.store.dispatch(new CreateTarefaAction(tarefa));
  }

}
