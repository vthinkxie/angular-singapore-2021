import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'onpush', loadChildren: () => import('./onpush/onpush.module').then(m => m.OnpushModule) },
  { path: 'button', loadChildren: () => import('./button/button.module').then(m => m.ButtonModule) },
  { path: 'template', loadChildren: () => import('./template/template.module').then(m => m.TemplateModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
