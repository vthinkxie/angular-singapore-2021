import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'onpush', loadChildren: () => import('./onpush/onpush.module').then(m => m.OnpushModule) },
  { path: 'button', loadChildren: () => import('./button/button.module').then(m => m.ButtonModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
