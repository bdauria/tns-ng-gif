import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {GifDirective} from './gif/gif.directive';

@NgModule({
  imports: [],
  exports: [GifDirective],
  declarations: [GifDirective],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GifModule {
}
