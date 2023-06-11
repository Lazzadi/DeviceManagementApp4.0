import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {
  deviceId: number = 0;
  device: any;
  error: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.deviceId = +params['id']; // Extract the device ID from the route parameter
      this.getDevice();
    });
  }

  getDevice() {
    this.http.get<any>(`https://localhost:7195/api/Device/${this.deviceId}`)
      .subscribe(
        response => {
          this.device = response; // Update the component property with the received device data
        },
        error => {
          this.error = 'Error fetching device details.'; // Handle and display the error, if any
        }
      );
  }
}
