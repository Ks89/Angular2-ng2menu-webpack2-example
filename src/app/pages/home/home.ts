import {Component, AfterViewInit} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export default class HomeComponent {
  //trigger-variable for Ladda
   isLoading: boolean = false;

   toggleLoading() {
       this.isLoading = !this.isLoading;
   }
}
