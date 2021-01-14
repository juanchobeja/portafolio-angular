import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id:string;
  

  constructor(private _route: ActivatedRoute, public _productoService: ProductosService) { }

  ngOnInit(): void {

    this._route.params.subscribe(params =>{
      //console.log(params);
      //console.log(params['id']);

      this._productoService.getProducto(params['id']).subscribe((producto:ProductoDescripcion)=>{
        
        //console.log(producto);
        this.producto = producto;
        this.id=params['id'];
      })
      
    })
  }

}
