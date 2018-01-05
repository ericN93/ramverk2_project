import { Component, OnInit } from '@angular/core';
import { SocketService } from '../_services/socket.service';
import { FirebaseService } from '../_services/firebase.service';


const CHAT_URL = 'ws://localhost:3000';

export interface Message {
	author: string,
	message: string
}

@Component({
	selector: 'app-home',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.css'],
	providers: [ SocketService ]
})
export class ChatComponent {
	user: any;

	constructor(private chatService: SocketService, private firebaseService: FirebaseService) {
		this.user = this.firebaseService.currentUser()
		chatService.messages.subscribe(msg => {
			let now = new Date();
	      	let timestamp = now.toLocaleTimeString();
			if(msg){
				if(msg.type==='connection'){
					this.nrOfClients = msg.data.clients;
				}else if(msg.type==='message'){
					this.htmlToAdd += '[' + timestamp +  '] ' + msg.message.author + ': ' + msg.message.message + '<br>';
				}else if(msg.type==='close'){
					this.nrOfClients = msg.data.clients;
					this.htmlToAdd += '[' + timestamp +  '] ' + msg.message.author + ': ' + msg.message.message + '<br>';
				}
			}

		});
	}


	message = {
		message: { author: 'temp', message:'Type your message here'},
		data: {clients: 0},
		type: 'none'
	}

	nrOfClients = 0;
	htmlToAdd="";

	sendMsg() {
		this.message.message.author = this.user.email;
		this.chatService.messages.next(this.message);
		this.message.message.message = '';
	}

}
