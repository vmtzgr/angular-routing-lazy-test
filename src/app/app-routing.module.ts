import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then((m => m.StartModule))
  },
/*   {
    path: 'page-a',
    loadChildren: () => import('./page-a/page-a.module').then(m => m.PageAModule)
  },
  {
    path: 'page-b',
    loadChildren: () => import('./page-b/page-b.module').then(m => m.PageBModule)
  }, */
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'start'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
