import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppChildGuard } from '../../authentication/authentication.guard';
import { userAccountResolver } from '../../resolvers/user-account/user-account.resolver';
import { HomePage } from './home.page';

const routes: Routes = [
   {
      path: '',
      component: HomePage,
      resolve: { user: userAccountResolver },
      canActivateChild: [AppChildGuard],
      children: [
         {
            path: '',
            redirectTo: 'shopping-list',
            pathMatch: 'full',
         },
         {
            path: 'shopping-list',
            loadChildren: () =>
               import('./pages/shopping-lists/shopping-lists.module').then(
                  (m) => m.ShoppingListsPageModule
               ),
         },
         {
            path: 'profile',
            loadChildren: () =>
               import('./pages/user-profile/user-profile.module').then(
                  (m) => m.UserProfilePageModule
               ),
         },
      ],
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class HomePageRoutingModule {}
