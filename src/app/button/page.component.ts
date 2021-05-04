import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
    <app-container title="Element Selector">
      <app-button>button</app-button>
    </app-container>
    <app-container title="Attribute Selector">
      <button appButton>button</button>
    </app-container>
  `,
  styles: [
  ]
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
