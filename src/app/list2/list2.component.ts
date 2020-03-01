// You need to provide the dtOptions in the input.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss']
})
export class List2Component implements OnInit {
  
  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      columnDefs: [ {
        orderable: false,
        className: 'select-checkbox',
        targets:   0
      } ],

      pagingType: 'full_numbers'
    };
  }

}
