import {BrowserModule} from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthenticationService} from './core/authentication/service/authentication.service';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';


@NgModule({
	declarations: [
		AppComponent,
		routingComponents,

	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		SharedModule,
		HttpClientModule,
		AngularFireAuthModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		MatSnackBarModule,
		MatStepperModule,
		CoreModule,
		StoreModule.forRoot( {}),
		EffectsModule.forRoot([]),
		ConfirmationPopoverModule.forRoot({
			confirmButtonType: 'danger'
		}),

	],
	providers: [AuthenticationService],
	bootstrap: [AppComponent],
})
export class AppModule {
}

