import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';

export const appRouters: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
