import { Subject } from 'rxjs';
import { UserModel } from './user.model';
import { AuthDataModel } from './auth-data.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
	private user: UserModel;
	authChange = new Subject<boolean>();

	constructor( private router: Router ) {

	}

	registerUser( authData: AuthDataModel ) {
		this.user = {
			email: authData.email,
			userId: Math.round( Math.random() * 10000 ).toString()
		};

		this.authSuccesfully();
	}

	login( authData: AuthDataModel ) {
		this.user = {
			email: authData.email,
			userId: Math.round( Math.random() * 10000 ).toString()
		};

		this.authSuccesfully();
	}

	logout() {
		this.user = null;
		this.authChange.next( false );
		this.router.navigate( [ '/login' ] );
	}

	getUset() {
		return { ...this.user };
	}

	isAuth() {
		return this.user !== null;
	}

	private authSuccesfully() {
		this.authChange.next( true );
		this.router.navigate( [ '/training' ] );
	}
}
