import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  user: any = {}; // Object to hold the user login details
  error: string = ''; // Property to hold error messages, if any

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    try {
      this.http.post<any>('https://localhost:7195/api/User/login', this.user)
        .subscribe(
          response => {
            console.log('User logged in successfully:', response);
            if (response.Email) {
              //token
              this.router.navigate(['devices']);
            } else {
              this.error = 'Invalid email or password.';
            }
          },
          error => {
            console.log(error);
          }
        );
    }
    catch (e) {
      console.log(e);
    }
  }
}
