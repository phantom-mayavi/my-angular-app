import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  message:string = 'The Three Musketeers - Samrridh, Anirud & Rohinth';
  serverId:number = 10;
  serverStatus:string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
