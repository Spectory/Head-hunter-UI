import { UsersComponent } from './components/users/users.component';
import { CounterComponent } from './components/counter/counter.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

export const routes = [
  { path: '', redirectTo: '/main_page', pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'users', component: UsersComponent },
  { path: 'main_page', component: MainPageComponent },
  { path: 'add_candidate', component: AddCandidateComponent },
  { path: 'search_candidate', component: SearchPageComponent }
];
