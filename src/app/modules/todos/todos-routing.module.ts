import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TodosComponent} from "./components/todos/todos.component";
import {TodoDetailsComponent} from "./components/todo-details/todo-details.component";
import {TodoResolver} from "./services";
import {TodoGuard} from "./guards";

const routes: Routes = [
  {path:'',component: TodosComponent,canActivate:[TodoGuard], children:[
      {path:':id', component:TodoDetailsComponent, resolve: {todoData:TodoResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
