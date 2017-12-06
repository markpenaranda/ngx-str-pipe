# ngx-str-pipe

## Installation

To install this library, run:

```bash
$ npm install ngx-str-pipe --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ngx-str-pipe
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgxStrPipeModule } from 'ngx-str-pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxStrPipeModule,
    // Specify your library as an import
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title  }}
</h1>

<h4>Simple String Replace</h4>
{{ "Hello World" | replace: 'World': 'Angular' }}


<h4>Simple String Replace At String Index</h4>
{{ "Hello World" | replaceAt: 3: 'Angular' }}


```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [MJP](mailto:markangelpenaranda@gmail.com)
