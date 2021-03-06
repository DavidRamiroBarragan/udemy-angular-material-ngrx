import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Compponents
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { AuthGuard } from './auth/auth.guard';

const ROUTES: Routes = [
	{ path: '', component: WelcomeComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'training', component: TrainingComponent, canActivate: [ AuthGuard ] }
];

@NgModule( {
	imports: [ RouterModule.forRoot( ROUTES ) ],
	exports: [ RouterModule ],
	providers: [ AuthGuard ]
} )
export class AppRoutingModule {

}
