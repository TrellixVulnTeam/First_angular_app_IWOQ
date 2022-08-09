import { Component, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {//initial state of application
  title:string = ''
  serverElements = [{type: '', name: '', content:''}];
  feautureStart = 'recipe';
  fire: boolean = true;
  constructor() {
    console.log('Constructor')
  }

  ngOnInit(): void {
    console.log('OnInit Called')
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }

  onNavigate(feauture:string) {
    this.feautureStart = feauture;
  }

  onChange() {
    this.fire = !this.fire
  }

}
