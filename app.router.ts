import { NgModule} from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import {HomeComponent} from './home/home.component';
import{AdminComponent} from "./admin/admin.component"
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { PricingComponent } from './pricing/pricing.component';

export const routes: Routes = [
    {path: '', component:HomeComponent,  pathMatch: 'full' },
    {path:'home', component: HomeComponent },
    {path:'admin/:action', component: AdminComponent},
    {path:'maintenance/:action', component: MaintenanceComponent},
    {path:'pricing/:action', component: PricingComponent}
 ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
