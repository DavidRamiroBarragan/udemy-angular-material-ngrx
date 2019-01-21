import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ExerciseModel } from '../models/exercise.model';

@Component( {
	selector: 'app-past-training',
	templateUrl: './past-training.component.html',
	styleUrls: [ './past-training.component.css' ]
} )
export class PastTrainingComponent implements OnInit {
	dataSource = new MatTableDataSource<ExerciseModel>();
	displayColumns = [ 'date', 'name', 'duration', 'calories', 'state' ];

	constructor() { }

	ngOnInit() {
	}

}
