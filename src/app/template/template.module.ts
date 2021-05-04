import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { ContentComponent } from './content.component';
import { PageComponent } from './page.component';
import { ChildComponent } from './child.component';
import { ContainerModule } from '../container/container.module';

@NgModule({
  declarations: [TemplateComponent, ContentComponent, PageComponent, ChildComponent],
  imports: [CommonModule, TemplateRoutingModule, ContainerModule]
})
export class TemplateModule {}
