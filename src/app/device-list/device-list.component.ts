import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  devices: any[] = []; // Property to hold the list of devices
  error: string = ''; // Property to hold error messages, if any



  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDevices();
    // Initialization logic here
  }
  getDevices() {
    this.http.get<any[]>('https://localhost:7195/api/Device')
      .subscribe(
        response => {
          this.devices = response; // Update the component property with the received data
        },
        error => {
          this.error = 'Error fetching devices.'; // Handle and display the error, if any
        }
      );
  }
}
