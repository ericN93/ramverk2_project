'use strict';

const webSocket = require('ws');

module.exports = function(server) {
	const wss = new webSocket.Server({
		server: server,
		clientTracking: true,
		handleProtocols: (protocol) => {return 'json'}
	});

	let sendToAll = (ws, data) => {
		wss.clients.forEach((client) => {
	      	if (data.type==='connection'){
				client.send(JSON.stringify(data));
			} else {
				if(client !== ws && client.readyState === webSocket.OPEN){
					client.send(JSON.stringify(data));
				}
			}
	    });
	}

	wss.on('connection', (ws, data) => {
			let sendData = {
				'message': {author: 'Server', message:'lol'},
				'data': {clients: wss.clients.size},
				'type': 'connection'
			}
			sendToAll(ws, sendData)

	  ws.on('message', (data) => {

		  let dataFromSend = JSON.parse(data)
		  let sendData = {
			  'message': {author: dataFromSend.message.author, message: dataFromSend.message.message},
			  'data': {clients: wss.clients.size},
			  'type': 'message',
		  }
	  		sendToAll(ws, sendData);
	  });

	  ws.on('close', (code, reason) => {
	      console.log(`Closing connection: ${code} ${reason}`);
		  let sendData = {
			  'message': {author: 'Server', message:'A user has left the channel'},
			  'data': {clients: wss.clients.size},
			  'type': 'close'
		  }
		  sendToAll(ws, sendData)
      });
	});

	return wss;
};
