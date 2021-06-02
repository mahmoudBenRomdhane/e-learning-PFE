import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResponsableServicecService {

  constructor(private http : HttpClient) { }
  getResponsable(id_res:string){
    return this.http.get('http://localhost:3000/responsable/'+id_res)
  }
}
