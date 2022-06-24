import { Component, Input, OnInit } from '@angular/core';
import { RedditPostDataProperties } from '../../models/posts';
import * as Utils from 'src/app/shared/utils/utils';

@Component({
  selector: 'golf-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  @Input()
  public postDetails: RedditPostDataProperties | undefined;

  public utils = Utils;
  
  constructor() { }

  ngOnInit(): void {
console.log(this.postDetails)
  }

}
