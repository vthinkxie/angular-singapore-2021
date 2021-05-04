import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projection',
  template: `
    <ng-content></ng-content>
  `
})
export class ProjectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
