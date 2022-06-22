import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './pages/posts-list/posts-list.component';


export const routes: Routes = [
  {
    path: 'posts/list',
    component: PostsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule { }
