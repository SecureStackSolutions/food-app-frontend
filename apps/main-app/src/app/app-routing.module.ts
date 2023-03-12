import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authenticationChildGuard } from './libs/authentication/authentication.guard';
import { AuthenticationInterceptor } from './libs/authentication/authentication.interceptor';

const routes: Routes = [
   {
      path: '',
      canActivateChild: [authenticationChildGuard],
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
   providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }],
})
export class AppRoutingModule {}
