import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-public-layout',
  standalone: false,

  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.scss'
})
export class PublicLayoutComponent {
constructor(private router:Router) {
}
navigateToNewPage ():void {
  this.router.navigate(['./modules/auth/login']);
}
}
