import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  cartCount = 2;
  constructor(private loginService: LoginService, private router: Router) {
   
  }
  firstName=localStorage.getItem('firstName');
  name = this.firstName?.toLocaleUpperCase();
  

  ngOnInit(): void {
    this.isLoggedIn = !!this.loginService.getToken();
  }

  logout(): void {
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['login/user']);
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
  }
  
  isCollapsed = true;

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
  
}
