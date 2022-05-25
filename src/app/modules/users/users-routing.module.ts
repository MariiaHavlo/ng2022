import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserResolver} from "./services";
import {UserGuard} from "./guards";

const routes: Routes = [
  {path:'',component: UsersComponent, canActivate:[UserGuard], children:[
      {path:':id', component:UserDetailsComponent,  resolve: {userData:UserResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
