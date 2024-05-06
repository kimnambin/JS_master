import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'study01',
    loadChildren: () => import('./study01/study01.module').then( m => m.Study01PageModule)
  },
  {
    path: 'study02',
    loadChildren: () => import('./study02/study02.module').then( m => m.Study02PageModule)
  },
  {
    path: 'study03',
    loadChildren: () => import('./study03/study03.module').then( m => m.Study03PageModule)
  },
  {
    path: 'study04',
    loadChildren: () => import('./study04/study04.module').then( m => m.Study04PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
