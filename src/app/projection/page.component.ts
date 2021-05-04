import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
    <app-container title="Projection Child">
      <app-projection>
        <app-projection-child *ngFor="let i of list">{{ i }}</app-projection-child>
      </app-projection>
    </app-container>
    <app-container title="Virtual Child">
      <app-virtual>
        <app-virtual-child *ngFor="let i of list">{{ i }}</app-virtual-child>
      </app-virtual>
    </app-container>
  `,
  styles: []
})
export class PageComponent implements OnInit {
  list = [1, 2, 3];

  constructor() {}

  ngOnInit(): void {}
}
