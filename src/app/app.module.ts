import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter, routerReducer } from '@angular-redux/router';
import { RouterModule } from '@angular/router';

import { routes } from './routes';

import { AppComponent } from './app.component';

import { CounterActions } from './components/counter/counter.actions';
import { CounterComponent } from './components/counter/counter.component'

import { UsersActions } from './components/users/users.actions';
import { UsersComponent } from './components/users/users.component'

import { AjaxService } from './services/ajax.service';
import { DataService } from './services/data.service';

import { composeReducers, defaultFormReducer } from '@angular-redux/form';

import { rootReducer } from './app.reducer';
import { IAppState, INITIAL_STATE } from './app.state';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    UsersComponent,
    NavBarComponent,
    AddCandidateComponent,
    SearchPageComponent,
    MainPageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    BrowserAnimationsModule
  ],
  providers: [
    NgReduxRouter,
    CounterActions,
    UsersActions,
    AjaxService,
    DataService
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
