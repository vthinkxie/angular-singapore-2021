import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';

@NgModule({
  declarations: [ContainerComponent],
  exports: [ContainerComponent],
  imports: [CommonModule]
})
export class ContainerModule {}
