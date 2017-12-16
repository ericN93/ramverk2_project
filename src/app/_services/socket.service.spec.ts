import { TestBed, inject } from '@angular/core/testing';

import { SocketService } from './socket.service';


describe('Test: SocketService', () => {
	let socketService;


  beforeEach(() => {
  	socketService = new SocketService();

  });


  it('should get connection', () => {
      socketService.messages.subscribe(msg => {
        console.log(msg);
        expect(msg.type).toBe('connection')
      });
  });

  it('should get message', () => {
      socketService.messages.subscribe(msg => {
        console.log(msg);
        expect(msg.type).toBe('message')
      });
      
      socketService.messages.next({
          message: {author: '1', message: '2'},
  	      data:{clients: 2},
  	      type: 'message'});
  });

});
