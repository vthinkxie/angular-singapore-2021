import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
<!--    <a href="https://web.dev/external-anchors-use-rel-noopener/" target="_blank">Not Safe Link</a>-->
<!--    <br>-->
<!--    <a href="https://web.dev/external-anchors-use-rel-noopener/" rel="noopener" target="_blank">Safe Link</a>-->
  `
})
export class AppComponent {}
