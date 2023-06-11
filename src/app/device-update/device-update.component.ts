import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-device-update',
  templateUrl: './device-update.component.html',
  styleUrls: ['./device-update.component.css']
})
export class DeviceUpdateComponent implements OnInit {
  deviceId: number = 0;
  device: any;
  updateForm!: FormGroup;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.deviceId = +params['id']; // Extract the device ID from the route parameter
      this.getDevice();
    });

    this.updateForm = this.formBuilder.group({
      deviceId: ['', Validators.required],
      name: ['', Validators.required],
      manufacturer: ['', Validators.required],
      type: ['', Validators.required],
      operatingSystem: ['', Validators.required],
      osVersion: ['', Validators.required],
      processor: ['', Validators.required],
      ramAmount: ['', Validators.required]
    });
  }

  getDevice() {
    this.http.get<any>(`https://localhost:7195/api/Device/${this.deviceId}`)
      .subscribe(
        response => {
          this.device = response; // Update the component property with the received device data
          this.updateForm.patchValue(this.device); // Patch the form with the existing device values
        },
        error => {
          this.error = 'Error fetching device details.'; // Handle and display the error, if any
        }
      );
  }

  onSubmit() {
    if (this.updateForm.invalid) {
      return;
    }

    this.http.put<any>(`https://localhost:7195/api/Device/${this.deviceId}`, this.updateForm.value)
      .subscribe(
        response => {
          // Device update successful, navigate to device details page
          this.router.navigate(['/devices', this.deviceId]);
        },
        error => {
          this.error = 'Error updating device.'; // Handle and display the error, if any
        }
      );
  }
}
