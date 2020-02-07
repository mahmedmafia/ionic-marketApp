import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'listing',
    loadChildren: () => import('./listing/listing.module').then( m => m.ListingPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
