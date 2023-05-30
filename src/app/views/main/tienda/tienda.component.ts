import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/model/producto.model';
import { ProductosService } from 'src/app/shared/service/productos.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  productos : Producto[] = []; 
  productoSeleccionado : number = 0;
  constructor(private _productoService: ProductosService) { }

  ngOnInit(): void {
    this._productoService.obtenerProductos("","").subscribe({
      next: (data)=>{
        this.productos = data;
      },
      error: (error)=>{

      }
    });
  }

  cambiarSeleccion(e:any){
    this.productoSeleccionado = e.value[0].id;
  }

  editarProducto(){
    alert(this.productoSeleccionado)
  }

}
