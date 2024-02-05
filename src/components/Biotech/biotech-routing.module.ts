
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiotechComponent } from './biotech/biotech.component';


export const biotechRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: BiotechComponent,
                data: { title: 'Home Component' },
            },

        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(biotechRoutes)],
    exports: [RouterModule],
})
export class biotechRoutingModule {}
