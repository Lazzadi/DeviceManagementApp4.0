import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DeviceCreateComponent } from './device-create/device-create.component';
import { DeviceUpdateComponent } from './device-update/device-update.component';
import { DeviceDeleteComponent } from './device-delete/device-delete.component';
import { UserRegisterComponent } from './user-register/user-register.component';



const routes: Routes = [
  { path: 'devices', component: DeviceListComponent },
  { path: 'devices/create', component: DeviceCreateComponent },
  { path: 'devices/:id/update', component: DeviceUpdateComponent },
  { path: 'devices/:id/delete', component: DeviceDeleteComponent },
  { path: 'devices/:id', component: DeviceDetailsComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
