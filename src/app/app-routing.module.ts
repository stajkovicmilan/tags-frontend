import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { LinksComponent } from './links/links.component';
import { LinkStartComponent } from './links/links-start/link-start.component';
import { LinkEditComponent } from './links/links-edit/link-edit.component';
import { LinksResolverService } from './links/links-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/links', pathMatch: 'full' },
  {
    path: 'links',
    component: LinksComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: LinkStartComponent },
      { path: 'new', component: LinkEditComponent },
      {
        path: ':id',
        component: LinkEditComponent,
        resolve: [LinksResolverService]
      }
    ]
  },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
