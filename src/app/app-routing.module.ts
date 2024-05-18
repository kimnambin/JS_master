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
    path: 'tip01',
    loadChildren: () => import('./tip01/tip01.module').then( m => m.Tip01PageModule)
  },
  {
    path: 'tip02',
    loadChildren: () => import('./tip02/tip02.module').then( m => m.Tip02PageModule)
  },
  {
    path: 'tip03',
    loadChildren: () => import('./tip03/tip03.module').then( m => m.Tip03PageModule)
  },
  {
    path: 'free',
    loadChildren: () => import('./free/free.module').then( m => m.FreePageModule)
  },
  {
    path: 'write',
    loadChildren: () => import('./write/write.module').then( m => m.WritePageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'search-modal',
    loadChildren: () => import('./search-modal/search-modal.module').then( m => m.SearchModalPageModule)
  },
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
