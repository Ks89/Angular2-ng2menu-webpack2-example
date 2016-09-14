import { Component, ViewEncapsulation } from '@angular/core';
import { GlobalState } from '../common/services/global.state';

@Component({
  selector: 'my-application',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: require('./application.html'),
})
export default class ApplicationComponent {
  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState) {

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }
}
