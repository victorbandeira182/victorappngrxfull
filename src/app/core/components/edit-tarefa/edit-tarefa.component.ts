import {Component, Input} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Tarefa} from '../add-tarefa/Tarefa';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {GetTarefaAction, UpdateTarefaAction} from '../../store/actions/tarefa.action';
import {select, Store} from '@ngrx/store';
import {getTarefas} from '../../store/selector/tarefa.selector';
import {TarefaState} from '../../store/reducer/tarefa.reducer';

let tarefa: Tarefa;

@Component({
	selector: 'app-edit-tarefa',
	templateUrl: './edit-tarefa.component.html',
	styleUrls: ['./edit-tarefa.component.css']
})
export class EditTarefaComponent {
  @Input() tarefa: Tarefa;

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
  	this.dialog.open(EditTarefaComponentDialog, {
  		width: '40%',
  		minHeight: '400px',
  	});
  }

  saveSender(t) {
  	tarefa = t;
  }
}

@Component({
	selector: 'edit-add-tarefa-dialog',
	templateUrl: './edit-tarefa-dialog.component.html',
})
export class EditTarefaComponentDialog {
  pat = tarefa;
  tarefasCollection: AngularFirestoreCollection<Tarefa>;
  tarefas$: Observable<Tarefa[]>;
  checked = false;
  form = new FormGroup({
    titulo: new FormControl,
    notas: new FormControl,
  });



  constructor(private db: AngularFirestore,
              public dialogRef: MatDialogRef<EditTarefaComponentDialog>,
              private store: Store<TarefaState>
  ) {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onEdit(tarefa) {
    this.store.dispatch(new UpdateTarefaAction(tarefa))
  }

}
    /*
    this.db.collection('/tarefas')
  		.get()
  		.subscribe((snapshot) => {
  			snapshot.forEach(doc => {
  				if (tarefa.titulo === doc.data().titulo && tarefa.notas === doc.data().notas) {
  					this.editTarefa(doc, newValue);
  				}
  			});
  		});
  }

  editTarefa(oldValue, newValue) {
  	let newNote = tarefa.notas + ' New Edit: \n' + newValue.notas;
  	this.db.collection('/tarefas').doc(oldValue.id).set({
  		titulo: newValue.titulo,
  		notas: newValue.notas,
  	}).then(function() {
  		console.log('Document successfully written!');
  	})
  		.catch(function(error) {
  			console.error('Error writing document: ', error);
  		});
  }
}
*/
