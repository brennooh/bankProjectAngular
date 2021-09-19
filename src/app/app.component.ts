import { Component } from '@angular/core';
import { TransfersService } from './services/transfers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bank';

  constructor(private service: TransfersService ){

  }

}
