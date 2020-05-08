import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddTarefaComponent} from './components/add-tarefa/add-tarefa.component';
import {AddTarefaDialogComponent} from './components/add-tarefa/add-tarefa-dialog/add-tarefa-dialog.component';
import {EditTarefaComponent, EditTarefaComponentDialog} from './components/edit-tarefa/edit-tarefa.component';
import {SharedModule} from '../shared/shared.module';
import {CoreRoutingModule} from './core-routing.module';
import {TarefaCardComponent} from './components/tarefa-card/tarefa-card.component';
import {StoreModule} from '@ngrx/store';
import {globalReducer} from './store/reducer/global.reducer';
import {EffectsModule} from '@ngrx/effects';
import {TarefaEffect} from './store/effect/tarefa.effect';
import { LoginComponent } from './containers/login/login.component';
import {HomeComponent} from './containers/home/home.component';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {DeleteTarefaComponent, DeleteTarefaComponentDialog} from './components/delete-tarefa/delete-tarefa.component';



@NgModule({
	declarations: [AddTarefaDialogComponent,
		HomeComponent,
		AddTarefaComponent,
		EditTarefaComponentDialog,
		DeleteTarefaComponentDialog,
		DeleteTarefaComponent,
		EditTarefaComponent,
		TarefaCardComponent,
		LoginComponent,
  ],
	imports: [
		CommonModule,
		SharedModule,
		CoreRoutingModule,
		StoreModule.forFeature('core', globalReducer),
		EffectsModule.forFeature([TarefaEffect]),
		ConfirmationPopoverModule


	],
	exports: [
		TarefaCardComponent,
		AddTarefaComponent
	],
	entryComponents: [AddTarefaDialogComponent, EditTarefaComponentDialog, DeleteTarefaComponentDialog],


})
export class CoreModule {
}
