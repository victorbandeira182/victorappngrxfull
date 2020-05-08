import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Tarefa} from '../add-tarefa/Tarefa';
import {AngularFirestore} from '@angular/fire/firestore';
import { UpdateTarefaAction} from '../../store/actions/tarefa.action';
import { Store} from '@ngrx/store';
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
      data: this.tarefa,
    });
  }


}

@Component({
  selector: 'edit-add-tarefa-dialog',
  templateUrl: './edit-tarefa-dialog.component.html',
})
export class EditTarefaComponentDialog {
  form = null;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private db: AngularFirestore,
              public dialogRef: MatDialogRef<EditTarefaComponentDialog>,
              private store: Store<TarefaState>
  ) {
    this.form = new FormGroup({
      id: new FormControl(data.id),
      titulo: new FormControl(data.titulo),
      notas: new FormControl(data.notas),
    });


  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onEdit(tarefa) {
    this.store.dispatch(new UpdateTarefaAction(tarefa));
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
