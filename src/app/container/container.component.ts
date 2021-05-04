import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <h1>{{ title }}</h1>
    <hr />
    <div><ng-content></ng-content></div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 12px;
        background: grey;
        margin: 12px;
      }
    `
  ]
})
export class ContainerComponent implements OnInit {
  @Input() title: string | null = null;
  constructor() {}

  ngOnInit(): void {}
}
