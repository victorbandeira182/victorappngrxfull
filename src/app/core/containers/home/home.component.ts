import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, } from '@angular/fire/firestore';
import {GetTarefaAction} from '../../store/actions/tarefa.action';
import {select, Store} from '@ngrx/store';
import {TarefaState} from '../../store/reducer/tarefa.reducer';
import {getTarefas} from '../../store/selector/tarefa.selector';
import {AuthenticationService} from '../../authentication/service/authentication.service';

interface Tarefa {
  titulo: string;
  notas: string;

}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'victor-app';
  tarefas$: Observable<Tarefa[]>;

  constructor(private db: AngularFirestore,
              private store : Store<TarefaState>,
              public authenticationService : AuthenticationService
  ) {
  }

  ngOnInit() {
  	this.store.dispatch(new GetTarefaAction());
  	this.tarefas$ = this.store.pipe(select(getTarefas));

  }

  signout() {
  	if (window.confirm('Obrigado Por usar Nosso APP!')) {
  	}
  	this.authenticationService.signout();
  	console.log('Saiu com Sucesso!');
  };


}
