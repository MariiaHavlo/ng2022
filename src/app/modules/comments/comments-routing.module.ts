import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentResolver} from "./services";
import {CommentGuardGuard} from "./guards";

const routes: Routes = [
  {path:'',component: CommentsComponent, canActivate:[CommentGuardGuard], children:[
      {path:':id', component:CommentDetailsComponent,resolve: {commentData:CommentResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
