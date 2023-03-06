import { Component, OnInit } from '@angular/core';
import { HubConnection , HubConnectionBuilder } from "@microsoft/signalr";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private _hubConnection: HubConnection;
  nick = '';
  message = '';
  messages: string[] = [];

  constructor(){
  }

  public sendMessage(): void {
    this._hubConnection
      .invoke('send', this.nick, this.message)
      .then(() => this.message = '')
      .catch(err => console.error(err));
  }
  
  ngOnInit() {
    this._hubConnection = new HubConnectionBuilder().withUrl('/chat').build();
    let token = localStorage.getItem("JWT");
    let parseJwt = JSON.parse(atob(token.split('.')[1]));
    this.nick = parseJwt['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];

    this._hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

    this._hubConnection.on('send', (nick: string, receivedMessage: string) => {
      const text = `${nick}: ${receivedMessage}`;
      this.messages.push(text);
    });
  }
}

