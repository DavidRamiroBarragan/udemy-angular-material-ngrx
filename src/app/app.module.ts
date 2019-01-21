import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Modules
import { AppRoutingModule } from './app-routing.modules';

import { MaterialModule } from './material.module';
// Components
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopTrainingComponent } from './training/stop-training.component';
// Services
import { AuthService } from './auth/auth.service';
import { TrainingService } from './training/services/training.service';

@NgModule({
	declarations: [
		AppComponent,
		SignupComponent,
		TrainingComponent,
		CurrentTrainingComponent,
		NewTrainingComponent,
		PastTrainingComponent,
		LoginComponent,
		WelcomeComponent,
		HeaderComponent,
		SidenavListComponent,
		StopTrainingComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		AppRoutingModule,
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [ AuthService, TrainingService ],
	bootstrap: [ AppComponent ],
	entryComponents: [ StopTrainingComponent ]
})
export class AppModule { }
