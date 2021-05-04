import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent, ButtonAttributeComponent } from './button.component';
import { PageComponent } from './page.component';
import { ContainerModule } from '../container/container.module';

@NgModule({
  declarations: [ButtonComponent, ButtonAttributeComponent, PageComponent],
  imports: [CommonModule, ButtonRoutingModule, ContainerModule]
})
export class ButtonModule {}
