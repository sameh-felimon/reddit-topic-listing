import { Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { map, Subject, takeUntil } from 'rxjs';
import { Pageable } from 'src/app/posts/models/posts';

@Component({
  selector: 'golf-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnDestroy {
  @Input()
  public totalItems: number | undefined;

  @Input()
  public pageSize: number | undefined;

  @Input()
  public before: string | undefined;

  @Input()
  public after: string | undefined;

  @Output()
  public pageEvent = new EventEmitter<Pageable>();

  public stop$ = new Subject<void>();

  constructor() { }

  @ViewChild(MatPaginator, { static: true })
  public set paginator(paginator: MatPaginator) {
    if (paginator) {
      this.matPaginator = paginator;
      paginator.page
        .pipe(
          map((event: PageEvent) => {
            const previousPage = event.previousPageIndex ?? 0;
            const isNext = (event.pageIndex === previousPage) ? undefined : (event.pageIndex - previousPage) >= 1;

            return ({
              page: event.pageIndex,
              limit: event.pageSize,
              isNext,
              before: this.before,
              after: this.after
            })
          }
          ),
          takeUntil(this.stop$),
        )
        .subscribe((pageable) => this.pageEvent.emit(pageable));
    }
  }

  public get paginator(): MatPaginator {
    return this.matPaginator;
  }

  public matPaginator!: MatPaginator;


  ngOnDestroy(): void {
    this.stop$.next();
    this.stop$.complete();
  }
}
