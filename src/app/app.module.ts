import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogPageComponent } from './log-page/log-page.component';
import { AppEnteteComponent } from './app-entete/app-entete.component';
import { AppPiedComponent } from './app-pied/app-pied.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    LogPageComponent,
    AppEnteteComponent,
    AppPiedComponent,
    InscriptionComponent,
    UserListComponent,
    UserDetailComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
