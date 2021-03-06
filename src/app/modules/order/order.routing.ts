import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OrderComponent } from './view/order.component';


const routes: Routes = [
    {path: 'orders', component: OrderComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule {}
