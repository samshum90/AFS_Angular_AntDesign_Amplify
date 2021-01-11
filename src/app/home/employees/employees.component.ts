import { Component, OnInit } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import * as subscriptions from '../../../graphql/subscriptions';
// import { createTodo, updateTodo, deleteTodo } from '../../../graphql/mutations';
import { createUser, updateUser, deleteUser } from '../../../graphql/mutations';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';
import { FormatsService } from 'src/app/services/formats.service';
import { from, Observable, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  // todo = { name: "My first todo", description: "Hello world!" };
  // toDoList: Todo[];

  user = { "first_name": "Bastian", "last_name": "Chipchase", "favourite_movie": "Method to the Madness of Jerry Lewis", "likes_popcorn": true, "gender": "Male" };
  userList: User[] = [];
  subscription: Subscription;
  showModal: boolean = false;
  employeeForm: FormGroup;

  constructor(private formatService: FormatsService, private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      first_name: ['', [Validators.required],],
      last_name: ['', [Validators.required]],
      favourite_movie: [''],
      likes_popcorn: [''],
      gender: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // this.getToDos();
    this.getUsers();
    this.subscription = from(API.graphql(graphqlOperation(subscriptions.onCreateUser)))
      .subscribe({
        next: (user: any) => {
          const newUser = user.value.data.onCreateUser;
          this.userList = [newUser, ...this.userList];
        }
      });
    this.subscription = from(API.graphql(graphqlOperation(subscriptions.onDeleteUser)))
      .subscribe({
        next: (user: any) => {
          const deleteUserId = user.value.data.onDeleteUser.id;
          this.userList = this.userList.filter(user => user.id !== deleteUserId)
        }
      });
  }
  // === SUBSCRIPTIONS ===

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  // === REFRESH CODE ===
  async getUsers() {
    await (API.graphql({ query: queries.listUsers }) as Promise<Array<User>>)
      .then((list: any) => this.userList = list.data.listUsers.items)
  }

  // async createUser() {
  //   await API.graphql(graphqlOperation(createUser, { input: this.user }));
  // }

  async deleteUser(userId: number) {
    await API.graphql(graphqlOperation(deleteUser, { input: { id: userId } }));
  }

  async submitForm() {
    await API.graphql(graphqlOperation(createUser, { input: this.employeeForm.value }));
    this.handleCancel()
    this.employeeForm.reset()
  }

  openModal(): void {
    this.showModal = !this.showModal;
  }

  handleCancel(): void {
    this.showModal = false;
  }


  //  === TODO CODE ===
  // async getToDos() {
  //   await (API.graphql({ query: queries.listTodos }) as Promise<Array<Todo>>)
  //     .then((list: any) => this.toDoList = list.data.listTodos.items)
  //  .catch(err => console.error(err));
  //   console.log(this.toDoList);
  // }

  // async createTodo() {
  //   await API.graphql(graphqlOperation(createTodo, { input: this.todo }));

  // }

}
