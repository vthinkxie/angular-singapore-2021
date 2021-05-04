import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectionRoutingModule } from './projection-routing.module';
import { ProjectionComponent } from './projection.component';
import { ProjectionChildComponent } from './projection-child.component';
import { VirtualComponent } from './virtual.component';
import { VirtualChildComponent } from './virtual-child.component';
import { PageComponent } from './page.component';
import { ContainerModule } from '../container/container.module';

@NgModule({
  declarations: [ProjectionComponent, ProjectionChildComponent, VirtualComponent, VirtualChildComponent, PageComponent],
  imports: [CommonModule, ProjectionRoutingModule, ContainerModule]
})
export class ProjectionModule {}
