import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template',
  template: `
    <div *ngIf="false">
      <ng-template [ngTemplateOutlet]="template"></ng-template>
    </div>
  `,
  styles: []
})
export class TemplateComponent implements OnInit {
  @Input() template: TemplateRef<void> | null = null;

  constructor() {}

  ngOnInit(): void {}
}
