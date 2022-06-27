import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';
import * as fromFeature from '../../state/posts.reducers';

import { PostsListComponent } from './posts-list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;
  let store: Store<fromFeature.PostsState>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PostsListComponent,
        PaginationComponent,
      ],
      imports: [
        ReactiveComponentModule,
        StoreModule.forRoot({
          postsPage: combineReducers(fromFeature.postsReducer),
        })
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dipstach action for loading posts', () => {
    const storeSpy = spyOn(component.store, 'dispatch').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });

  it('posts should be fetshced onInit', () => {
    component.ngOnInit();
    fixture.detectChanges();
    component.posts$.subscribe(posts => {
      expect(posts?.data.children).toBeGreaterThan(0);
    });
  });

  // it('should render posts', () => {
  //   const postsEl: DebugElement = fixture.debugElement;
  //   console.log(postsEl)
  //   const posts = postsEl.query(By.css('post-card'))!;
  //   expect(posts).toBeGreaterThan(0);
  
  // });

});
