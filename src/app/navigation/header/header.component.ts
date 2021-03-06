import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component( {
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.css' ]
} )
export class HeaderComponent implements OnInit, OnDestroy {
	@Output()
	sidenavHeaderComponentToggle = new EventEmitter<void>();
	isAuth = false;
	authSubcscription: Subscription;

	constructor( private _authService: AuthService ) { }

	ngOnInit() {
		this.authSubcscription = this._authService.authChange.subscribe(
			authStatus => {
				this.isAuth = authStatus;
			}
		);
	}

	onToggleSidenav() {
		this.sidenavHeaderComponentToggle.emit();
	}

	onLogout() {
		this._authService.logout();
	}

	ngOnDestroy() {
		this.authSubcscription.unsubscribe();
	}
}
