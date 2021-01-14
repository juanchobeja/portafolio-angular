import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _infoService : InfoPaginaService,
              private _router: Router) { 

  }

  ngOnInit(): void {
  }

  buscarProducto(termino:string){

if (termino.length<1) {
  return;
}

this._router.navigate(['/search',termino]);
//    console.log(termino);

  }

}
