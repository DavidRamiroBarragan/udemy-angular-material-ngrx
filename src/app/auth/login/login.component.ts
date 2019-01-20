import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component( {
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
} )

export class LoginComponent implements OnInit {
	loginForm: FormGroup;

	constructor( private _authService: AuthService ) { }

	ngOnInit() {
		this.loginForm = new FormGroup(
			{
				email: new FormControl( '', [ Validators.email, Validators.required ] ),
				password: new FormControl( '', [ Validators.required, Validators.minLength( 6 ) ] )
			}
		);
	}

	onSubmit() {
		this._authService.login( {
			email: this.loginForm.value.email,
			password: this.loginForm.value.password
		} );
	}
}
