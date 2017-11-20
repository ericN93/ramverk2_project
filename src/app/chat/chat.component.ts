	import { Component, OnInit } from '@angular/core';
import { SocketService } from '../_services/socket.service';

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

	constructor(private chatService: SocketService) {
		chatService.messages.subscribe(msg => {
			//let parse = JSON.parse(msg)
			let now = new Date();
	      	let timestamp = now.toLocaleTimeString();
			console.log(msg)
			console.log('message')
			console.log(msg.message.message)
			console.log('author')
			console.log(msg.message.author)
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
		message: { author:'temp', message:'this is a test message'},
		data: {clients: 0},
		type: 'none'
	}

	nrOfClients = 0;
	htmlToAdd="";

	sendMsg() {
		let now = new Date();
		let timestamp = now.toLocaleTimeString();

		this.htmlToAdd += '[' + timestamp +  '] You:'  + this.message.message.message +  '<br>';
		this.chatService.messages.next(this.message);
		this.message.message.message = '';
	}

}
