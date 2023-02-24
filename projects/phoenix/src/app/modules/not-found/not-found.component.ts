import { Component } from '@angular/core';
import {NavigateService} from "../../../services/navigate.service";


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(public navigation: NavigateService) {
    console.log("NotFoundComponent");
  }
}
