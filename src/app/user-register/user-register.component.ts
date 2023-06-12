import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  //component for user registration
  user: any = {}; // Object to hold the user details
  error: string = ''; // Property to hold error messages, if any

  constructor(private http: HttpClient) { }

  userRegister() {
    this.http.post<any>('https://localhost:7195/api/User', this.user)
      .subscribe(
        response => {
          console.log('Device created successfully:', response);
        },
        error => {
          this.error = 'Error creating device.'; // Handle and display the error, if any
        }
      );
  }

}
