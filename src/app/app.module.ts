import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter, routerReducer } from '@angular-redux/router';
import { RouterModule } from '@angular/router';

import { routes } from './routes';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component'
import { CounterComponent } from './components/counter/counter.component'

import { CounterActions } from './components/counter/counter.actions';
import { UsersActions } from './components/users/users.actions';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';

import { rootReducer } from './app.reducer'
import { IAppState, INITIAL_STATE } from './app.state'


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    UsersComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [
    NgReduxRouter,
    CounterActions,
    UsersActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, private devTools: DevToolsExtension, ngReduxRouter: NgReduxRouter) {

    const storeEnhancers = this.devTools.isEnabled() ? [ this.devTools.enhancer() ] : [];

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], storeEnhancers);

    ngReduxRouter.initialize();

  }
}
