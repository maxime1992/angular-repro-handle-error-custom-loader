import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LazyLoadedComponent } from './lazy-loaded.component';

const routes: Routes = [
  {
    path: '',
    component: LazyLoadedComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [LazyLoadedComponent]
})
export class LazyLoadedModule { }