import { Component, OnInit } from '@angular/core';
import * as data from "../../../assets/mock_data_(5).json";
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { User } from 'src/app/models/user';


interface ColumnItem {
  name: string;
  sortOrder?: NzTableSortOrder | null;
  sortFn?: NzTableSortFn | null;
  listOfFilter?: NzTableFilterList;
  filterFn?: NzTableFilterFn | null;
  filterMultiple?: boolean;
  sortDirections?: NzTableSortOrder[];
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  listData: any = (data as any).default;

  listOfColumns: ColumnItem[] = [
    {
      name: 'First Name',
      sortOrder: null,
      sortFn: (a: User, b: User) => a.first_name.localeCompare(b.first_name),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Last Name',
    },
    {
      name: 'Favorite Movie',
    },
    {
      name: 'Likes Popcorn',
      filterMultiple: false,
      listOfFilter: [
        { text: 'True', value: true },
        { text: 'False', value: false }
      ],
      filterFn: (likes_popcorn: boolean, item: User) => item.likes_popcorn === likes_popcorn
    },
    {
      name: 'Gender',
      filterMultiple: true,
      listOfFilter: [
        { text: 'Female', value: 'Female' },
        { text: 'Male', value: 'Male', },
        { text: 'Other', value: 'Other', }
      ],
      filterFn: (gender: string, item: User) => item.gender.indexOf(gender) !== -1
    },
  ];

  constructor() { }

  ngOnInit(): void {

    console.log(this.listData)
  }

}
