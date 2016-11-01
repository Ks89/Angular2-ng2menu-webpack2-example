import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-application',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: require('./application.html'),
})
export default class ApplicationComponent {

  constructor(){}
}
