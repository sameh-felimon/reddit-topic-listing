import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsPageComponent } from './pages/post-details-page/post-details-page.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';


export const routes: Routes = [
  {
    path: 'posts/list',
    component: PostsListComponent,
  },
  {
    path: 'post/:id',
    component: PostDetailsPageComponent,
  },
  {
    path: '',
    redirectTo: "posts/list",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule { }
