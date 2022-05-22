import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {ITodo} from "../../interfaces";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
@Input()
todo:ITodo
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  getDetails():void {
    this.router.navigate([this.todo.id],{relativeTo:this.activatedRoute})
  }
}