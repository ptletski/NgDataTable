// You can use the angular directives to render the table. 
// Angular-datatables provides a dtTrigger you can use to manually trigger 
// the rendering of the table.

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { Person } from 'person';

@Component({
  selector: 'app-list4',
  templateUrl: './list4.component.html',
  styleUrls: ['./list4.component.scss']
})

export class List4Component implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Person> = new Subject();

  constructor(private http: Http) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.http.get('localhost:3000/data')
      //.map(this.extractData)
      .subscribe(persons => {
       // this.persons = persons;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

}
