import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CMapComponent} from './c-map.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {CMapRoutingModule} from "./c-map-routing.module";

@NgModule({
  declarations: [
    CMapComponent
  ],
  imports: [
    CommonModule,
    CMapRoutingModule,
    GoogleMapsModule
  ],
  exports: [CMapComponent]
})
export class CMapModule {
}
