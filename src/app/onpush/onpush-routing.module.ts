import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnpushComponent } from './onpush.component';

const routes: Routes = [{ path: '', component: OnpushComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnpushRoutingModule {}
