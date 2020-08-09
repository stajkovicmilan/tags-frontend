import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { LinksComponent } from './links/links.component';
import { LinksListComponent } from './links/links-list/links-list.component';
import { LinkItemComponent } from './links/links-list/link-item/link-item.component';
import { LinkStartComponent } from './links/links-start/link-start.component';
import { LinkEditComponent } from './links/links-edit/link-edit.component';
import { LinksService } from './links/links.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinksComponent,
    LinksListComponent,
    LinksListComponent,
    LinkItemComponent,
    DropdownDirective,
    LinkStartComponent,
    LinkEditComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    LinksService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
