import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <div *ngIf="false"><ng-content></ng-content></div>
  `,
  styles: []
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
