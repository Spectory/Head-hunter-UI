import { UsersComponent } from './components/users/users.component';
import { CounterComponent } from './components/counter/counter.component';

export const routes = [
  { path: '', redirectTo: '/counter', pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'users', component: UsersComponent }
];
