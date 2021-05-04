import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-onpush-child',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    {{ check() }}
    <!--    {{ array | json }}-->
    <!--    <button (click)="childEmmit()">Child Component Event Trigger</button>-->
  `,
  styles: []
})
export class OnpushChildComponent implements OnInit {
  @Input() array: number[] = [];

  childEmmit(): void {}

  check(): string {
    console.log('check');
    return '';
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // this.cdr.detach();
    // setTimeout(() => {
    //   this.array = [2, 3, 4];
    //   this.cdr.markForCheck();
    // }, 3000);
  }
}
