import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from 'src/app/models/transferencia.model';
import { TransfersService } from 'src/app/services/transfers.service';

@Component({
  selector: 'app-newtransfer',
  templateUrl: './newtransfer.component.html',
  styleUrls: ['./newtransfer.component.scss']
})
export class NewTransferComponent implements OnInit {
 
  @Output() onTransfer = new EventEmitter<any>();

  valor!: number;
  destino!: number;
  
  constructor(private service: TransfersService, private router: Router){};

  transferOnClick(){
    console.log("testando");
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.clearInput();
      this.router.navigateByUrl('extrato');
    }, error => console.error (error));
    
  }

  clearInput(){
    this.valor = 0;
    this.destino = 0;
  }

  ngOnInit(): void {
  }

}
