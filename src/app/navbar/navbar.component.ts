import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


}

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    document.querySelector('nav')?.classList.remove('py-4')
  } else {
    document.querySelector('nav')?.classList.add('py-4')
  }
})

