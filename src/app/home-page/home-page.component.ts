import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <!-- Contents of home-page.component.html -->
    <div class="container">
      <h1>Welcome to Device Manager App</h1>
  
      <p>
        The Device Manager App is a powerful tool that allows you to manage and keep track of all your devices in one place.
        Whether you are an individual or an organization, this app helps you stay organized and efficient in managing your devices.
      </p>
  
      <h2>Key Features</h2>
  
      <ul>
        <li>View a list of all devices along with their details</li>
        <li>Add new devices to the system</li>
        <li>Update device information easily</li>
        <li>Delete devices when they are no longer needed</li>
        <li>User registration for secure access and personalized experience (Coming soon) </li>
      </ul>
  
      <h2>How to Get Started</h2>
  
      <ol>
        <li>Register a user account to access the app</li>
        <li>Add your devices to the system</li>
        <li>Start managing and organizing your devices efficiently</li>
      </ol>
    </div>
  `,
})
export class HomePageComponent {

}
