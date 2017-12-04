import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

	private userInfo = {
		loggedIn: false
	};

  public initUserInfo() {
  	if (!localStorage.getItem('userInfo')) {
  		localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
      return true;
  	}
    return false;
  }

  public saveUserInfo(userInfo) {
  	localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  public getUserInfo() {
  	return JSON.parse(localStorage.getItem('userInfo'));
  }

}
