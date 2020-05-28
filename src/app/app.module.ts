import {BrowserModule} from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AngularFireAuthModule} from '@angular/fire/auth';
// import {AuthenticationService} from './core/authentication/service/authentication.service';
// import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {UserEffect} from './core/store/effect/user.effect';
import {UserReducer} from './core/store/reducer/user.reducer';
import {AngularFireModule} from '@angular/fire';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
// import {DevToolsProxy} from './devtools/dev-tools-proxy';

// if (environment.devTools.RemoteDev.enabled) {
//   // @ts-ignore
//   const devToolsProxy = new DevToolsProxy(window['__REDUX_DEVTOOLS_EXTENSION__']);
//
//   // support both the legacy and new keys, for now
//   window['devToolsExtension'] = devToolsProxy;
//   window['__REDUX_DEVTOOLS_EXTENSION__'] = devToolsProxy;
// // }

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
		AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
		MatSnackBarModule,
		MatStepperModule,
		CoreModule,
		StoreModule.forRoot( {
      user: UserReducer
    }),
		EffectsModule.forRoot([
		  UserEffect]),
		// ConfirmationPopoverModule.forRoot({
		// 	confirmButtonType: 'danger'
		// }),
    StoreDevtoolsModule.instrument({
      name: 'victor'
    }),
	],
	providers: [AngularFireAuthGuard],
	bootstrap: [AppComponent],
})
export class AppModule {
}

