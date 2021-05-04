import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onpush',
  template: `
    <app-container title="Lib Component">
      <app-onpush-child [array]="array"></app-onpush-child>
    </app-container>
    <app-container title="Bad Component">
      <app-mouse-move-check></app-mouse-move-check>
    </app-container>
  `,
  styles: []
})
export class OnpushComponent implements OnInit {
  array: number[] = [];
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.array.push(1);
      // this.array = [1, 2, 3];
    }, 3000);
  }
}
