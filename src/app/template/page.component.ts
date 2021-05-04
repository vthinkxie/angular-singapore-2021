import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
    <app-container title="ng-content">
      <app-content><app-child></app-child></app-content>
    </app-container>
    <app-container title="ng-template">
      <app-template [template]="template"></app-template>
      <ng-template #template><app-child></app-child></ng-template>
    </app-container>
  `,
  styles: []
})
export class PageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
