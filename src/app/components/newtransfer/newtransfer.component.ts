import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newtransfer',
  templateUrl: './newtransfer.component.html',
  styleUrls: ['./newtransfer.component.scss']
})
export class NewTransferComponent implements OnInit {
 
  @Output() onTransfer = new EventEmitter<any>();

  valor!: number;
  destino!: number;
  
  transferOnClick(){
    console.log("testando");
    this.onTransfer.emit({valor: this.valor, destino: this.destino});
    this.clearInput();
  }

  clearInput(){
    this.valor = 0;
    this.destino = 0;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
