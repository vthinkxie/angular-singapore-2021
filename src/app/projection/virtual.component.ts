import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { VirtualChildComponent } from './virtual-child.component';

@Component({
  selector: 'app-virtual',
  template: `
    <div *ngFor="let c of virtualChildren">
      <ng-template [ngTemplateOutlet]="c.template"></ng-template>
    </div>
  `,
  styles: []
})
export class VirtualComponent implements OnInit {
  @ContentChildren(VirtualChildComponent) virtualChildren = new QueryList<VirtualChildComponent>();

  constructor() {}

  ngOnInit(): void {}
}
