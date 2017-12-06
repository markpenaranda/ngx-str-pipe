import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxStrReplacePipe } from './ngx-str-replace.pipe';
import { NgxStrReplaceCharsAtPipe } from './ngx-str-replace-chars-at.pipe';


export * from './ngx-str-replace.pipe';
export * from './ngx-str-replace-chars-at.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxStrReplacePipe,
    NgxStrReplaceCharsAtPipe
  ],
  exports: [
    NgxStrReplacePipe,
    NgxStrReplaceCharsAtPipe
    
  ]
})
export class NgxStrPipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxStrPipeModule,
    };
  }
}
