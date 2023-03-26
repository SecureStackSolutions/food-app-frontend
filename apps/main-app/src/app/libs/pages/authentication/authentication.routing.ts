import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageGuard } from '../../authentication/authentication.guard';
import { AuthenticationPage } from './authentication.page';

const routes: Routes = [
   {
      path: '',
      canActivate: [AuthPageGuard],
      component: AuthenticationPage,
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class AuthenticationPageRoutingModule {}
