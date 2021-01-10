import { Component, OnInit } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
// import { createTodo, updateTodo, deleteTodo } from '../../../graphql/mutations';
import { createUser, updateUser, deleteUser } from '../../../graphql/mutations';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';
import { FormatsService } from 'src/app/services/formats.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  // todo = { name: "My first todo", description: "Hello world!" };
  // toDoList: Todo[];

  userList: User[];
  constructor(private formatService: FormatsService) { }

  ngOnInit(): void {
    // this.getToDos();
    this.getUsers();
  }

  async getUsers() {
    await (API.graphql({ query: queries.listUsers }) as Promise<Array<Todo>>)
      .then((list: any) => this.userList = list.data.listUsers.items);
    console.log(this.userList);
  }

  // async createTodo() {
  //   await API.graphql(graphqlOperation(createTodo, { input: this.todo }));

  // }

  // async getToDos() {
  //   await (API.graphql({ query: queries.listTodos }) as Promise<Array<Todo>>)
  //     .then((list: any) => this.toDoList = list.data.listTodos.items);
  //   console.log(this.toDoList);
  // }

  // async createTodo() {
  //   await API.graphql(graphqlOperation(createTodo, { input: this.todo }));

  // }

}
