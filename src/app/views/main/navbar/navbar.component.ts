import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
      this.items = [
          {
              label:'Inicio',
              icon:'pi pi-fw pi-home',
              routerLink: '/main'
          },
          {
            label: 'Tienda',
            icon: 'pi pi-fw pi-shopping-bag',
            routerLink: '/main/tienda'
          },
          {
            label: 'Nosotros',
            icon: 'pi pi-fw pi-info-circle',
            routerLink: '/main/nosotros'
          },
          {
            label: 'Contactanos',
            icon: 'pi pi-fw pi-send',
            routerLink: '/main/contactanos'
          },
// {id:2,nombre:"Tienda",link:"tienda",disabled:false},
// {id:3,nombre:"Nosotros",link:"nosotros",disabled:false},
// {id:4,nombre:"Contactanos",link:"contactanos",disabled:false}
          {
              label:'Cerrar Sesión',
              icon:'pi pi-fw pi-power-off',
              command: this.cerrarSesion.bind(this)
          }
      ];
  }

  cerrarSesion(){
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }

}
