/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgxStrPipeModule }  from 'ngx-str-replace-pipe';

@Component({
  selector: 'app',
  template: `
    <h1>{{ "HELLO" | replace : 'LO':'LU' }}</h1>
    <h1>{{ "HELLOWORLD" | replaceAt : 3: 'xxxx'}}</h1>
    `
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, NgxStrPipeModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
