import {Injectable} from '@angular/core';

// Service
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

// RxJS
import {Observable} from 'rxjs';
import {tap, map, take} from 'rxjs/operators';
import {AuthenticationService} from '../service/authentication.service';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

	constructor(private authenticationService: AuthenticationService,
              private router: Router) {
	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return this.authenticationService.user.pipe(
			take(1),
			map(user => !!user),
			tap(logged => {
				if (!logged) {
					console.log('Error, please try once again!');
					this.router.navigate(['/']);
				}
			})
		);
	}

}
