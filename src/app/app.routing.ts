import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './components/about.components';
import {UserComponent} from './components/user.components';
import {HomeComponent} from './components/home.components';


const appRoutes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'user',
    component:UserComponent
  }
];

export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);
