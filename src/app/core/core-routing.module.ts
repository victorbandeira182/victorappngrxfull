import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './containers/login/login.component';
import {HomeComponent} from './containers/home/home.component';
import {AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
// import {AuthenticationGuard} from './authentication/guard/authentication.guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'home', canActivate:[AngularFireAuthGuard], component: HomeComponent, data: { authGuardPipe: redirectUnauthorizedToLogin }},
];

@NgModule({
	declarations: [],
	imports: [
		RouterModule.forChild(routes),
	],
	exports: [RouterModule]
})
export class CoreRoutingModule { }
