
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
export const HomeRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: HomeComponent,
                data: { title: 'Home Component' },
            },

        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(HomeRoutes)],
    exports: [RouterModule],
})
export class homeRoutingModule {}
