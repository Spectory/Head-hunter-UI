import { UsersComponent } from './components/users/users.component';
import { CounterComponent } from './components/counter/counter.component';


export const routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'counter', component: CounterComponent },
];
