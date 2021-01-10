import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  
  info: InfoPagina = {};
  cargada = false;
  equipo: any[]=[];
  
  constructor(private _http: HttpClient) {


//console.log('Servicio de infopagina');
this.cargarInfo();
this.cargarEquipo();

   }

   private cargarInfo() {
//leer el archivo Json

this._http.get('assets/data/data-pagina.json')
.subscribe((resp:InfoPagina)=>{


  this.cargada = true;
  this.info=resp;
  //console.log(resp);  
  //console.log(resp['twitter']);  
  
});
   }


   private cargarEquipo(){
    this._http.get('https://angular-html-ff523-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((resp:any[])=>{
    
    
      this.equipo=resp;
      //console.log(resp);  
    });
   }

}
