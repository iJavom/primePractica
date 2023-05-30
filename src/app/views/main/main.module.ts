import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import {DockModule} from 'primeng/dock';
import {OrderListModule} from 'primeng/orderlist';

import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CardModule } from 'primeng/card';
import { ProductosService } from 'src/app/shared/service/productos.service';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';



@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    InicioComponent,
    TiendaComponent,
    ContactanosComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    MenubarModule,
    TabMenuModule,
    DockModule,
    CardModule,
    InputTextModule,
    OrderListModule,
    ButtonModule,
    InputTextareaModule
  ],
  providers: [
    ProductosService
  ]
})
export class MainModule { }
