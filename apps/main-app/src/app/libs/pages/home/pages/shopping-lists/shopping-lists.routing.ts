import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListsPage } from './shopping-lists.page';

const routes: Routes = [
   {
      path: '',
      component: ShoppingListsPage,
      children: [
         {
            path: ':id',
            loadChildren: () =>
               import('./shopping-list/shopping-list.module').then((m) => m.ShoppingListPageModule),
         },
      ],
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class ShoppingListsPageRoutingModule {}
