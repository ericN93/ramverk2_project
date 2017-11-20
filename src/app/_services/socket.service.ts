import { Injectable } from '@angular/core';
import { Observable, Subject, Observer } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { ServerService } from './server.service';

const CHAT_URL = 'ws://localhost:3000/';

export interface Message {
	message: {author: string, message: string},
	data:{clients: number},
	type: string,
}

@Injectable()
export class SocketService {

	public messages: Subject<Message>;
	private subject: Subject<MessageEvent>;

	constructor(wsService: ServerService) {
		this.messages = <Subject<Message>>this
		.connect(CHAT_URL)
		.map((response: MessageEvent) => {
			return JSON.parse(response.data);
		});
	}

	private connect(url): Subject<MessageEvent> {
		if (!this.subject) {
			this.subject = this.create(url);
			console.log("Successfully connected: " + url);
		}
		return this.subject;
	}

	private create(url): Subject<MessageEvent> {
		let ws = new WebSocket(url, 'json');

		let observable = Observable.create(
			(obs: Observer<MessageEvent>) => {
				ws.onmessage = obs.next.bind(obs);
				ws.onerror = obs.error.bind(obs);
				ws.onclose = obs.complete.bind(obs);
				return ws.close.bind(ws);
			})

		let observer = {
			next: (data: Object) => {
				if (ws.readyState === WebSocket.OPEN) {
					ws.send(JSON.stringify(data));
				}
			}
		}
		return Subject.create(observer, observable);
	}

}
