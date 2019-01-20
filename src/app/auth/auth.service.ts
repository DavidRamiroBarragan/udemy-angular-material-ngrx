import { Subject } from 'rxjs';
import { UserModel } from './user.model';
import { AuthDataModel } from './auth-data.model';

// @ts-ignore
export class AuthService {
	private user: UserModel;
	authChange = new Subject<boolean>();

	registerUser( authData: AuthDataModel ) {
		this.user = {
			email: authData.email,
			userId: Math.round( Math.random() * 10000 ).toString()
		};
		this.authChange.next( true );
	}

	login( authData: AuthDataModel ) {
		this.user = {
			email: authData.email,
			userId: Math.round( Math.random() * 10000 ).toString()
		};
		this.authChange.next( true );
	}

	logout() {
		this.user = null;
		this.authChange.next( false );
	}

	getUset() {
		return { ...this.user };
	}

	isAuth() {
		return this.user !== null;
	}
}
