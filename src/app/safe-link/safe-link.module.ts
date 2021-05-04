import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeLinkDirective } from './safe-link.directive';

@NgModule({
  declarations: [SafeLinkDirective],
  exports: [SafeLinkDirective],
  imports: [CommonModule]
})
export class SafeLinkModule {}
