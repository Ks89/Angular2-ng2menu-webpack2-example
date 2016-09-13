import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import {
  BaSidebar
} from './components';

import {
  BaSlimScroll,
} from './directives';

const NGA_COMPONENTS = [
  BaSidebar
];

const NGA_DIRECTIVES = [
  BaSlimScroll,
];


@NgModule({
  declarations: [
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS
  ]
})
export class NgaModule {
}
