import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  searchNumber!: number;


  constructor(private router: Router) { }

  onSubmit(): void {
    if (this.searchNumber) {
      this.router.navigate(['/devices', this.searchNumber]);
    }
  }
}

