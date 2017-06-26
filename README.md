# ng2-cli-test-spin-kit

Project for [https://github.com/WoltersKluwerPL/ng-spin-kit/issues/47](https://github.com/WoltersKluwerPL/ng-spin-kit/issues/47)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.5.

## Project creation

* `ng new ng2-cli-test-spin-kit`
* `cd ng2-cli-test-spin-kit`
* `npm install --save ng2-spin-kit`

## Files changed

* [src/app/app.module.ts](src/app/app.module.ts)
* [src/app/app.component.html](src/app/app.component.html)

## Project build and serve successfull

* `ng serve`

## Startup in browser fails
```
Uncaught Error: Unexpected value 'WaveComponent' declared by the module 'AppModule'. Please add a @Pipe/@Directive/@Component annotation.
    at syntaxError (http://localhost:4200/vendor.bundle.js:43136:34)
    at http://localhost:4200/vendor.bundle.js:56868:40
    at Array.forEach (native)
    at CompileMetadataResolver.getNgModuleMetadata (http://localhost:4200/vendor.bundle.js:56850:54)
    at JitCompiler._loadModules (http://localhost:4200/vendor.bundle.js:68126:70)
    at JitCompiler._compileModuleAndComponents (http://localhost:4200/vendor.bundle.js:68099:36)
    at JitCompiler.compileModuleAsync (http://localhost:4200/vendor.bundle.js:68028:37)
    at PlatformRef_._bootstrapModuleWithZone (http://localhost:4200/vendor.bundle.js:6052:25)
    at PlatformRef_.bootstrapModule (http://localhost:4200/vendor.bundle.js:6038:21)
    at Object.171 (http://localhost:4200/main.bundle.js:19:124)
```

