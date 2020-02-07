import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubcategoryComponent} from './subcategory/subcategory.component'

import { ListingPage } from './listing.page';

const routes: Routes = [
  {
    path: '',
    component: ListingPage,
    children:[
      {path:'sub',component:SubcategoryComponent},
      // {
      //   path: '',
      //   redirectTo: '/listing/sub',
      //   pathMatch: 'full'
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingPageRoutingModule {}
