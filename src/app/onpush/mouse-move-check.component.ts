import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-move-check',
  template: `
    <div (mousemove)="mouseMove($event)"></div>
  `,
  styles: [
    `
      div {
        height: 200px;
        width: 100%;
        background: blue;
      }
    `
  ]
})
export class MouseMoveCheckComponent implements OnInit {
  mouseMove(e: MouseEvent): void {}

  constructor() {}

  ngOnInit(): void {}
}
