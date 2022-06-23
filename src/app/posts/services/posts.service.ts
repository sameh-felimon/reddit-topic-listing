import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pageable, RedditDto } from './posts';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private redditUrl = environment.RedditUrl;
  constructor(private readonly httpClient: HttpClient) {

  }

  public getPostsList(pageable?: Pageable): Observable<RedditDto> {
    let url = this.redditUrl;

    if (pageable?.limit) {
      url += `?limit=${pageable?.limit}&&count=10`;
    }

    if ((pageable?.isNext === true) && pageable.after) {
      url += `&after=${pageable?.after}`;
    }

    if ((pageable?.isNext === false) && pageable.before) {
      url += `&before=${pageable?.before}`;
    }

    return this.httpClient.get<RedditDto>(url);
  }

}
