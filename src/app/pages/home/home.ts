import {Component, AfterViewInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'home.html'
})
export default class HomeComponent {
  //trigger-variable for Ladda
   isLoading: boolean = false;

   toggleLoading() {
       this.isLoading = !this.isLoading;
   }
}
