import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Interface to define the structure of menu items
interface MenuItem {
  label: string; // Text to display
  icon: string; // Icon name/path
  route?: string; // Optional route for navigation
  hasSubmenu?: boolean; // Whether item has a submenu
}

@Component({
  selector: 'app-sidebar',
  standalone: true, // Angular 21 standalone component
  imports: [CommonModule, RouterModule], // Import necessary modules
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'home',
      route: '/dashboard',
      hasSubmenu: false,
    },
    {
      label: 'Forms',
      icon: 'users',
      route: '/teams',
    },
    {
      label: 'Signals',
      icon: 'folder',
      route: '/projects',
    },
    {
      label: 'Pipe',
      icon: 'calendar',
      route: '/calendar',
      hasSubmenu: false,
    },
  ];

  // User information
  info = 'Practice Application Angular ';

  // Track which menu item is active
  activeItem: string = 'Dashboard';

  // Method to handle menu item clicks
  onMenuItemClick(item: MenuItem): void {
    this.activeItem = item.label;
    console.log('Navigating to:', item.route);
  }
}
