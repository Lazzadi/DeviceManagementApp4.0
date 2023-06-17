import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css']
})
export class DeviceCreateComponent {
  device: any = {}; // Object to hold the device details
  error: string = ''; // Property to hold error messages, if any

  constructor(private http: HttpClient, private router: Router) { }

  createDevice() {
    this.http.post<any>('https://localhost:7195/api/Device', this.device)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/devices']);
        },
        error => {
          console.log(error);
          this.error = error.error;
        }
      );
  }

}
