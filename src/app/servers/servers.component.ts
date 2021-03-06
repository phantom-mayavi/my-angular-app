import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  //template: '<app-server></app-server><app-server></app-server>',
  /*template: `
    <app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>
  `,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus = 'No server was created!!!';
  serverName:string = 'Test Server';
  isServerCreated:boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  getAllowNewServer() {
    return this.allowNewServer;
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.isServerCreated = true;
    this.serverCreationStatus = 'Server was created!!! : ' + this.serverName;
    console.log("Hello");
  }

  onUpdateServerName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    //console.log(event);
  }

}
