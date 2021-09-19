import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

private listaDeTransferencia: any [];
private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient:HttpClient) { 
    this.listaDeTransferencia = [];
  }
  get transferencias(){
    return this.listaDeTransferencia;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar (transferencia: Transferencia): Observable <Transferencia>{
    this.datando(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private datando(transferencia: any){
    transferencia.data = new Date();
  }
}
