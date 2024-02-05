
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

export const ProductRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ProductComponent,
                data: { title: 'Product Component' },
            },

        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(ProductRoutes)],
    exports: [RouterModule],
})
export class productRoutingModule {}
