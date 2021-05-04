import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnpushRoutingModule } from './onpush-routing.module';
import { OnpushComponent } from './onpush.component';
import { OnpushChildComponent } from './onpush-child.component';
import { MouseMoveCheckComponent } from './mouse-move-check.component';
import { ContainerModule } from '../container/container.module';

@NgModule({
  declarations: [OnpushComponent, OnpushChildComponent, MouseMoveCheckComponent],
  imports: [CommonModule, ContainerModule, OnpushRoutingModule]
})
export class OnpushModule {}
