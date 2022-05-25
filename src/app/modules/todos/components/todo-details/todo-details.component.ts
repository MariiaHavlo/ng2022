import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ITodo} from "../../interfaces";
import {TodosService} from "../../services";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
todo:ITodo;

  constructor(private activatedRoute:ActivatedRoute, private todosService:TodosService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({todoData})=>this.todo = todoData)
  }

}
