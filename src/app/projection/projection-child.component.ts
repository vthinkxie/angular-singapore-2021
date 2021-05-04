import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projection-child',
  template: `
    <ng-content></ng-content>
  `
})
export class ProjectionChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
