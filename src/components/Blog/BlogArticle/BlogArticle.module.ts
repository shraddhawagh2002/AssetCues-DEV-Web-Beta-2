import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTreeModule } from '@angular/material/tree';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { BlogArticleRoutes, BlogArticleRoutingModule } from './BlogArticle-routing.module';
import { HeaderComponent } from './header/header.component';
import { BlogarticleComponent } from './blogarticle/blogarticle.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BlogarticleComponent
  ],
  imports: [
    CommonModule,
    BlogArticleRoutingModule,
    MatTabsModule,
    RouterModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatSortModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatPaginatorModule,
    MatTreeModule,
    MatTooltipModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forChild(BlogArticleRoutes),
  ]
})
export class BlogArticleModule { }