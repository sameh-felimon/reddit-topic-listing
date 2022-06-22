import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostComponent } from './components/post/post.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PostsListComponent,
    PostDetailsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class PostsModule { }
