import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {CoreModule} from "../core/core.module";

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        HttpModule,
        BrowserModule,
        CoreModule,
    ],
    declarations: [ MODULE_COMPONENTS ]
})

export class DashboardModule{}
