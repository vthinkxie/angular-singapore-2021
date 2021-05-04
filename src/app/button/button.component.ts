import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <em>prefix </em>
    <ng-content></ng-content>
    <em> suffix</em>
  `,
  styles: [
    `
      :host {
        appearance: auto;
        text-rendering: auto;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0;
        text-shadow: none;
        display: inline-block;
        text-align: center;
        align-items: flex-start;
        cursor: default;
        box-sizing: border-box;
        margin: 0;
        font: 400 13px Arial;
        padding: 1px 6px;
        border-width: 2px;
        border-style: outset;
        border-image: initial;
        background: #fff;
      }
    `
  ]
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[appButton]',
  template: `
    <em>prefix </em>
    <ng-content></ng-content>
    <em> suffix</em>
  `,
  styles: []
})
export class ButtonAttributeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
