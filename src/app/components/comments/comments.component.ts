import { Component, OnInit } from '@angular/core';

import {CommentService} from "../../servises/comment.service";
import {IComment} from "../../models/IComment";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {


  constructor(private commentService:CommentService) { };

  comments: IComment[];

  ngOnInit(): void {
    this.commentService.getComments()
      .subscribe(value => this.comments = value);
  }

}
