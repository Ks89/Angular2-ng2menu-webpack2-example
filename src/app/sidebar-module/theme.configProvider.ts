import {Injectable} from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class BaThemeConfigProvider {

  basic = {
    default: '#ffffff',
    defaultText: '#ffffff',
    border: '#dddddd',
    borderDark: '#aaaaaa',
  };

  // main functional color scheme
  colorScheme = {
    primary: '#00abff',
    info: '#40daf1',
    success: '#8bd22f',
    warning: '#e7ba08',
    danger: '#f95372',
  };

  conf = {
    theme: {
      name: 'ng2',
    },
    colors: {
      default: this.basic.default,
      defaultText: this.basic.defaultText,
      border: this.basic.border,
      borderDark: this.basic.borderDark,

      primary: this.colorScheme.primary,
      info: this.colorScheme.info,
      success: this.colorScheme.success,
      warning: this.colorScheme.warning,
      danger: this.colorScheme.danger
    }
  };

  get() {
    return this.conf;
  }


  changeTheme (theme) {
    _.merge(this.get().theme, theme);
  }

  changeColors (colors) {
    _.merge(this.get().colors, colors);
  }
}
