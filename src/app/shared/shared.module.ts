import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
  ],
  exports: [
   CommonModule,
   MatPaginatorModule, 
   PaginationComponent,
  ]
})
export class SharedModule { }
