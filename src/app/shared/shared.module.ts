import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Route, RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTab, MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTreeModule} from '@angular/material/tree';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatPaginatorModule,
        MatSlideToggleModule,
        MatExpansionModule,
        RouterModule,
        MatTabsModule,
        MatRadioModule,
        MatCheckboxModule,
        MatDialogModule,
        MatTreeModule,
      MatButtonToggleModule,
      MatChipsModule,
      MatDatepickerModule,
      MatDividerModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatSortModule,
      MatTableModule,
      MatMenuModule,
      MatSelectModule,
      MatTooltipModule,
      MatProgressBarModule,
      MatRippleModule,
      MatSidenavModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
      MatButtonToggleModule,
      MatChipsModule,
      MatDatepickerModule,
      MatDividerModule,
      MatFormFieldModule,
      MatTabsModule,
      MatIconModule,
      MatInputModule,
      MatSortModule,
      MatTableModule,
      MatMenuModule,
      MatSelectModule,
      MatTooltipModule,
      MatProgressBarModule,
      MatRippleModule,
      MatSidenavModule
    ],
    declarations: [
      
    ]
})
export class SharedModule
{
}
