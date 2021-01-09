import { Component, OnInit } from '@angular/core';
import * as data from "../../../assets/mock_data_(5).json";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  listData: any = (data as any).default;

  constructor() { }

  ngOnInit(): void {

    console.log(this.listData)
  }

}
