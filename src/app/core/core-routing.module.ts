import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './containers/login/login.component';
import {HomeComponent} from './containers/home/home.component';
import {AuthenticationGuard} from './authentication/guard/authentication.guard';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'home', canActivate: [AuthenticationGuard], component: HomeComponent},
];


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
	],
	exports: [RouterModule]
})
export class CoreRoutingModule { }
