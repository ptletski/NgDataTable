// You can also fetch the data from a server using an Ajax call.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list3',
  templateUrl: './list3.component.html',
  styleUrls: ['./list3.component.scss']
})
export class List3Component implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      ajax: {
        url: 'http://localhost:3000/data',
        dataSrc: ''
      },
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }]
    };
  }

}
