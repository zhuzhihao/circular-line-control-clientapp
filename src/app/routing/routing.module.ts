import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrafanaComponent } from '../grafana/grafana.component';
import { FooComponent } from '../foo/foo.component';
import { Routes, RouterModule } from '@angular/router';
import { ControlComponent } from '../control/control.component';

const routes: Routes = [
  { path: 'grafana', component: GrafanaComponent},
  { path: 'foo', component: FooComponent},
  { path: 'control', component: ControlComponent},
  { path: '', redirectTo: '/grafana', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
})
export class RoutingModule { }
