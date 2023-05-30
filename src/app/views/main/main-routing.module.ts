import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { InicioComponent } from './inicio/inicio.component';
import { TiendaComponent } from './tienda/tienda.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';


const routes: Routes = [
  // {
  //   path: '', redirectTo: 'login'
  // },
  {
    path: '', component:MainComponent
    ,children:[
      { path: '', component: InicioComponent },
      { path: 'tienda', component: TiendaComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'contactanos', component: ContactanosComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
