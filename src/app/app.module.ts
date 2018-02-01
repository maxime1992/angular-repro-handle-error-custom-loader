import { NgModule, ErrorHandler, NgModuleFactoryLoader } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyErrorHandler } from './my-error-handler';
import { ModuleLoader } from './module-loader';

const routes: Routes = [
  {
    path: 'lazy-loaded',
    loadChildren: 'app/lazy-loaded/lazy-loaded.module#LazyLoadedModule',
  },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent],
  providers: [
    {
      provide: ErrorHandler,
      useClass: MyErrorHandler,
    },
    {
      provide: NgModuleFactoryLoader,
      useClass: ModuleLoader,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
