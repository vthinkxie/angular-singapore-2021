import { Directive, HostBinding } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'a[target="_blank"]:not([rel="noopener"])'
})
export class SafeLinkDirective {
  @HostBinding('style.color') color = 'red';
  @HostBinding('rel') rel = 'noopener';
}
