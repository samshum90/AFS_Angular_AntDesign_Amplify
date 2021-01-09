import { Component, OnInit } from '@angular/core';
import * as data from "../../../assets/mock_data_(5).json";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  listData: Array<{
    id: number, first_name: string,
    last_name: string, favourite_movie: string,
    likes_popcorn: boolean, gender: string
  }>;

  constructor() { }

  ngOnInit(): void {
    this.listData = data.default;
    console.log(this.listData)
  }

}
