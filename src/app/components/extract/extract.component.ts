import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/models/transferencia.model';
import { TransfersService } from 'src/app/services/transfers.service';
@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {



  transferencias!: any[];
  constructor(private service: TransfersService) { }

  ngOnInit() {
    this.service.todas().subscribe((transferencias: Transferencia[]) =>{
      console.table(transferencias);
      this.transferencias = transferencias;
    })
  }

}
