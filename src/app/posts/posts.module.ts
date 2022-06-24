import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsPageComponent } from './pages/post-details-page/post-details-page.component';
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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PostsListComponent,
    PostDetailsPageComponent,
    PostComponent,
    PostDetailsComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ReactiveComponentModule,
    MatPaginatorModule,
    SharedModule,
    MatProgressSpinnerModule,

    StoreModule.forFeature('posts-page', postsReducer),
    EffectsModule.forFeature([PostsEffects]),
  ]
})
export class PostsModule { }
