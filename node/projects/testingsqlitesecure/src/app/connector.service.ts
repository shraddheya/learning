import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  constructor(private _electronService: ElectronService) {
    console.log('running... ')
    _electronService.ipcRenderer.on('async:dbfetch', (evt, dt) => {
      console.log(dt)
    })
  }
  testService() {
    this._electronService.ipcRenderer.send('asasync:dbfetchync', 'hello from electron')
  }
}
