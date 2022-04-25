import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LogPageComponent } from './log-page/log-page.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: LogPageComponent },
  { path: 'inscription', component: InscriptionComponent },
  {
    path: 'user', children: [
      { path: 'list', component: UserListComponent },
      { path: ':id', component: UserDetailComponent }
    ]
  },
  {
    path: 'article', children: [
      { path: 'list', component: ArticleListComponent },
      { path: ':id', component: ArticleDetailComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
