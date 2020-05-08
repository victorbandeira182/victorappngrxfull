import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication/service/authentication.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(public authenticationService: AuthenticationService,) {
	}

	ngOnInit() {

	}

	//------------------------------------------------------------------------------------
	//                                    G O O G L E
	//------------------------------------------------------------------------------------

	signinGoogle() {
		this.authenticationService.signinWithGoogle();
		console.log('Signing with Google Account');
	}

}
