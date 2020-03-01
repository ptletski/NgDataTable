import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

export class Test {
  constructor(
    public code: string,
    public name: string
  ) { }
}

@Component({
  selector: 'app-list5',
  templateUrl: './list5.component.html',
  styleUrls: ['./list5.component.scss']
})

export class List5Component implements OnInit {
  @ViewChild(DataTableDirective, {static: false}) datatableElement: DataTableDirective;

  clients = Array<Test>();
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      order: [[0, "asc"]],
      autoWidth: true,
      columns: [
        { title: 'Code', data: 'name' },
        { title: 'Name', data: 'code' },
      ]
    };

    this.clients.push(new Test("a", "andy"));
    this.clients.push(new Test("b", "billt"));
    this.clients.push(new Test("c", "charlie"));
    this.clients.push(new Test("d", "don"));
    this.clients.push(new Test("e", "eddy"));

    this.rerender();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
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

  addRow() {
    this.clients.push(new Test("ac", "ac"));
    this.rerender();
  }

  removeRow() {
    this.clients = this.clients.slice(1);
    this.rerender();
  }
}
