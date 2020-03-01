import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-intake-list',
  templateUrl: './intake-list.component.html',
  styleUrls: ['./intake-list.component.scss']
})

export class IntakeListComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective, {static: false}) datatableElement: DataTableDirective;
  
  dtOptions: DataTables.Settings = {};
  gridPageSize: number;
  
  constructor() {
    this.gridPageSize = 10;
   }

  ngOnInit() {
    this.dtOptions = {
      order:  [[1, 'asc']],
      pagingType: 'full_numbers',
      pageLength: this.gridPageSize
    };
  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }
}



/*
        
              columnDefs: [{ "orderable": false, "targets": 0 }],
        <li><a href="#" routerLink="/list4">List-4</a></li>
  {static: false}      
*/