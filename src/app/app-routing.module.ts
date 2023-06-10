import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';

const routes: Routes = [
  {
    path: 'devices', component: DeviceListComponent },
  { path: '', redirectTo: 'devices', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
