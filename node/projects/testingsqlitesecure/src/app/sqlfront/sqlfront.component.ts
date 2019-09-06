import { Component, OnInit } from '@angular/core';
import { ConnectorService } from '../connector.service';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-sqlfront',
  templateUrl: './sqlfront.component.html',
  styleUrls: ['./sqlfront.component.sass']
})
export class SqlfrontComponent implements OnInit {

  counterClicked = 0;

  constructor( private connectorService: ConnectorService, private electronService: ElectronService ) {
    electronService.ipcRenderer.on('heheeh', (evt, dt) => {
      console.log(evt, dt);
    });
  }

  ngOnInit() {}

  clickedfun() {
    // console.log('clicked');
    this.counterClicked += 1;
    this.connectorService.testService();
    this.electronService.ipcRenderer.send('async:dbfetch', {id: 123});
  }

}
