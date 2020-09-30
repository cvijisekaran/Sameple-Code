import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes, AppRoutingModule } from './app.router';
import {HomeModule} from './home/home.module';
import {AdminModule} from "./admin/admin.module";
import{FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { PricingModule } from './pricing/pricing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    AdminModule,
    MaintenanceModule,
    PricingModule
  ],
  exports :[
    HomeModule, AdminModule,MaintenanceModule, PricingModule
  ],
  providers: [GenericService, BottlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
