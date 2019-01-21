import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component( {
	selector: 'app-sidenav-list',
	templateUrl: './sidenav-list.component.html',
	styleUrls: [ './sidenav-list.component.css' ]
} )
export class SidenavListComponent implements OnInit, OnDestroy {
	@Output()
	sidenavComponentToggle = new EventEmitter<void>();

	isAuth = false;
	isAuthSubscription: Subscription;

	constructor( private _authService: AuthService ) { }

	ngOnInit() {
		this.isAuthSubscription = this._authService.authChange.subscribe( authresult => {
			this.isAuth = authresult;
		} );
	}

	onClose() {
		this.sidenavComponentToggle.emit();
	}

	onLogout() {
		this.onClose();
		this._authService.logout();
		console.log( 'fsdfsadfsad' );
	}

	ngOnDestroy() {
		this.isAuthSubscription.unsubscribe();
	}
}
