import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

cargando = true;
productos: Producto[] = [];

  constructor(private _httpproducto: HttpClient) { 
    this.cargarProductos();
  }


  private cargarProductos(){
this._httpproducto.get('https://angular-html-ff523-default-rtdb.firebaseio.com/productos_idx.json')
.subscribe((resp: Producto[])=>{
console.log(resp);
this.productos=resp;
this.cargando =false;
});
  }

}
