import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-device-delete',
  template: `
    <div class="container">
  <h2>Confirm Device Deletion</h2>
  <p>Are you sure you want to delete this device?</p>
  <button class="btn btn-danger" (click)="deleteDevice()">Delete</button>
  <button class="btn btn-secondary" (click)="goBack()">Cancel</button>
  </div>
  `,
})
export class DeviceDeleteComponent implements OnInit {
  deviceId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.deviceId = +params['id']; // Extract the device ID from the route parameter
    });
  }

  deleteDevice() {
    this.http
      .delete<any>(`https://localhost:7195/api/Device/${this.deviceId}`)
      .subscribe(
        () => {
          // Device deletion successful, navigate to device list page
          this.router.navigate(['/devices']);
        },
        (error) => {
          console.error('Error deleting device:', error);
          // Handle and display the error, if any
        }
      );
  }

  goBack() {
    this.router.navigate(['/devices']); // Navigate back to device list page
  }
}
