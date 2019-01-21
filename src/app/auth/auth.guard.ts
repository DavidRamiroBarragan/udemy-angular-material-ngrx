import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor( private _authService: AuthService, private router: Router ) {
	}

	canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
		if ( this._authService.isAuth() ) {
			return true;
		} else {
			this.router.navigate( [ '/login' ] );
		}
	}
}
