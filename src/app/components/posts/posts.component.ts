import { Component, OnInit } from '@angular/core';

import {PostService} from "../../servises/post.service";
import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:IPost[];

  constructor(private postService:PostService) { };


  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value);
  }

}
