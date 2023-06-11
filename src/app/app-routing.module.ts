import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';

const routes: Routes = [
  { path: 'devices', component: DeviceListComponent },
  { path: 'devices/:id', component: DeviceDetailsComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
