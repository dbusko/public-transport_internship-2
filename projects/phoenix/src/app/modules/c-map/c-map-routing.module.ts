import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CMapComponent} from "./c-map.component";

const routes: Routes = [
  {
    path: '',
    component: CMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CMapRoutingModule {
}
