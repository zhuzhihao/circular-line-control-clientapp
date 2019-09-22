import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  constructor(private http: HttpClient) {}

  testHttpGet() {
    console.log('Test');

    return this
    .http
    .get(`http://date.jsontest.com`)
    .subscribe(response => console.log(response));
  }
  ngOnInit() {
  }

}
