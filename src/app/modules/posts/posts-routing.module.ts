import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostResolver} from "./services";
import {PostGuard} from "./guards";

const routes: Routes = [
  {path:'',component: PostsComponent,canActivate:[PostGuard] ,children:[
      {path:':id', component:PostDetailsComponent,resolve: {postData:PostResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
