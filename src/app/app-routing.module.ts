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
    path: 'numbers',
    loadChildren: () => import('./numbers/numbers.module').then( m => m.NumbersPageModule)
  },
  {
    path: 'alphabets',
    loadChildren: () => import('./alphabets/alphabets.module').then( m => m.AlphabetsPageModule)
  },
  {
    path: 'shapes',
    loadChildren: () => import('./shapes/shapes.module').then( m => m.ShapesPageModule)
  },
  {
    path: 'colors',
    loadChildren: () => import('./colors/colors.module').then( m => m.ColorsPageModule)
  },
 
  {
    path: 'poems',
    loadChildren: () => import('./poems/poems.module').then( m => m.PoemsPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
