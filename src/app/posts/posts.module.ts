import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostComponent } from './components/post/post.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './state/posts.reducers';
import { PostsEffects } from './state/posts.effects';
import { ReactiveComponentModule } from '@ngrx/component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../shared/shared.module';


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
    ReactiveComponentModule,
    MatPaginatorModule,
    SharedModule,
    
    StoreModule.forFeature('posts-page', postsReducer),
    EffectsModule.forFeature([PostsEffects]),
  ]
})
export class PostsModule { }
