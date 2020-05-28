import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Tarefa} from '../add-tarefa/Tarefa';
import {AngularFirestore} from '@angular/fire/firestore';
import {DeleteTarefaAction} from '../../store/actions/tarefa.action';
import {Store} from '@ngrx/store';
import {TarefaState} from '../../store/reducer/tarefa.reducer';

let tarefa: Tarefa;

@Component({
  selector: 'app-delete-tarefa',
  templateUrl: './delete-tarefa.component.html',
  styleUrls: ['./delete-tarefa.component.css']
})

export class DeleteTarefaComponent {
  @Input() tarefa: Tarefa;

  constructor(public dialog: MatDialog) {

  }

  openDialog(): void {
    this.dialog.open(DeleteTarefaComponentDialog, {
      width: '40%',
      minHeight: '200px',
      data: this.tarefa,
    });
  }

}

@Component({
  selector: 'delete-tarefa-dialog',
  templateUrl: './delete-tarefa-dialog.component.html',
  styleUrls: ['./delete-tarefa.component.css']

})
export class DeleteTarefaComponentDialog {
  form = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private db: AngularFirestore,
              public dialogRef: MatDialogRef<DeleteTarefaComponentDialog>,
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

  onDelete(tarefa) {
    this.store.dispatch(new DeleteTarefaAction(tarefa));
    };

  }
