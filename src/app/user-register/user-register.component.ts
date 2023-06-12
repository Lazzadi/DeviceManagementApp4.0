import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  //component for user registration
  user: any = {}; // Object to hold the user details
  error: string = ''; // Property to hold error messages, if any

  constructor(private http: HttpClient, private router: Router) { }

  userRegister() {
    this.http.post<any>('https://localhost:7195/api/User', this.user)
      .subscribe(
        response => {
          console.log('User registered successfully:', response);
          this.router.navigate(['devices']);
        },
        error => {
          this.error = 'Error creating User.'; // Handle and display the error, if any
        }
      );
  }

}
