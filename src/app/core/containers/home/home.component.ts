import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore,} from '@angular/fire/firestore';
import {GetTarefaAction} from '../../store/actions/tarefa.action';
import {select, Store} from '@ngrx/store';
import {TarefaState} from '../../store/reducer/tarefa.reducer';
import {getTarefas} from '../../store/selector/tarefa.selector';
import {AngularFireAuth} from '@angular/fire/auth';
import {getUsuarioAutenticado} from '../../store/selector/autenticacao.selector';
import {LogoutAction} from '../../store/actions/user.action';

// import {AuthenticationService} from '../../authentication/service/authentication.service';

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
  usuario$: Observable<any>;

  constructor(private db: AngularFirestore,
              private store: Store<TarefaState>,
              public afAuth: AngularFireAuth
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new GetTarefaAction());
    this.tarefas$ = this.store.pipe(select(getTarefas));
    this.usuario$ = this.store.pipe(select(getUsuarioAutenticado));
  }

  signout() {
    if (window.confirm('Obrigado Por usar Nosso APP!')) {
    }
    this.store.dispatch(new LogoutAction());
    console.log('Saiu com Sucesso!');
  };


}
