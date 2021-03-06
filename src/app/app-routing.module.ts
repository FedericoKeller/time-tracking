import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { MainInterceptor } from './interceptors/main.interceptor';
import { AccountVerificationGuard } from './modules/module-authentication/guards/account-verification.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/module-authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/global/global.module').then((m) => m.GlobalModule),
      canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
