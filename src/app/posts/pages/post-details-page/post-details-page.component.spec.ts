import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';

import { PostDetailsPageComponent } from './post-details-page.component';
import { PostDetailsComponent } from '../../components/post-details/post-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

describe('PostDetailsPageComponent', () => {
  let component: PostDetailsPageComponent;
  let fixture: ComponentFixture<PostDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PostDetailsPageComponent,
        PostDetailsComponent,
      ],
      imports: [
        MatIconModule,
        MatCardModule,
        ReactiveComponentModule,
        StoreModule.forRoot({})
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
