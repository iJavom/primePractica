import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./views/auth/auth.module').then((m)=>m.AuthModule),

  },
  {
    path: 'main',
    loadChildren: () => import('./views/main/main.module').then((m)=>m.MainModule),

  },
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
