import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-list6',
  templateUrl: './list6.component.html',
  styleUrls: ['./list6.component.scss']
})
export class List6Component implements OnInit {
  @ViewChild(DataTableDirective, {static: false}) datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      ajax: {
        url: 'http://localhost:3000/rejects',
        dataSrc: ''
      },
      columns: [
      { title: 'Last Name', data: 'lastName' }, 
      { title: 'First Name', data: 'firstName' },
      { title: 'MBI/HICN', data: 'mbi-hicn' },
      { title: 'DOB', data: 'dob'},
      { title: 'Plan Eff Date', data: 'planEffDate' },
      { title: 'Primary Carrier', data: 'primaryCarrier' },
      { title: 'Secondary Carrier', data: 'secondaryCarrier' },
      { title: 'Secondary ID', data: 'secondaryId' }
    ]
    };
  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that.search(this['value']).draw();
          }
        });
      });
    });
  }
}

/*

<table #ref datatable [dtOptions]="dtOptions" [dtTrigger]="dtTrigger"></table>

*/