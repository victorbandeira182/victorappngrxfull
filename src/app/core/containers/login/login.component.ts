import {Component, OnInit} from '@angular/core';
// import {AuthenticationService} from '../../authentication/service/authentication.service';
import {CreateTarefaAction} from '../../store/actions/tarefa.action';
import {LoginAction} from '../../store/actions/user.action';
import {Store} from '@ngrx/store';
import {TarefaState} from '../../store/reducer/tarefa.reducer';
import {UserState} from '../../store/reducer/user.reducer';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(
	  private store : Store<UserState>
  ) {}

	ngOnInit() {

	}

	//------------------------------------------------------------------------------------
	//                                    G O O G L E
	//------------------------------------------------------------------------------------

	signinGoogle() {
    this.store.dispatch(new LoginAction());

		/*this.authenticationService.signinWithGoogle();
		console.log('Signing with Google Account');
		*/

	}

}
