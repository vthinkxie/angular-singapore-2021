import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual-child',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class VirtualChildComponent implements OnInit {
  @ViewChild(TemplateRef, { static: true }) template!: TemplateRef<void>;

  constructor() {}

  ngOnInit(): void {}
}
