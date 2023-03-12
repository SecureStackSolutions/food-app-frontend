import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authenticationGuard } from './libs/authentication/authentication.guard';

const routes: Routes = [
   {
      path: '',
      canActivate: [authenticationGuard],
      children: [
         {
            path: '',
            redirectTo: 'shopping-list',
            pathMatch: 'full',
         },
         {
            path: 'shopping-list',
            loadChildren: () =>
               import('./libs/pages/shopping-lists/shopping-lists.module').then(
                  (m) => m.ShoppingListsPageModule
               ),
         },
         {
            path: 'profile',
            loadChildren: () =>
               import('./libs/pages/user-profile/user-profile.module').then(
                  (m) => m.UserProfilePageModule
               ),
         },
      ],
   },
   {
      path: 'authenticate',
      loadChildren: () =>
         import('./libs/pages/authentication/authentication.module').then(
            (m) => m.AuthenticationPageModule
         ),
   },
   {
      path: '',
      redirectTo: 'shopping-list',
      pathMatch: 'full',
   },
];

@NgModule({
   imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
   exports: [RouterModule],
})
export class AppRoutingModule {}
