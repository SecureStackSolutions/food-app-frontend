import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
      path: 'app',
      loadChildren: () =>
         import('./libs/pages/home/home.page.module').then((m) => m.HomePageModule),
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
      redirectTo: 'app',
      pathMatch: 'full',
   },
];

@NgModule({
   imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
   exports: [RouterModule],
   // providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }],
})
export class AppRoutingModule {}
