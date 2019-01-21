import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrainingService } from '../services/training.service';
import { ExerciseModel } from '../models/exercise.model';

@Component( {
	selector: 'app-new-training',
	templateUrl: './new-training.component.html',
	styleUrls: [ './new-training.component.css' ]
} )
export class NewTrainingComponent implements OnInit {
	@Output()
	trainingStart = new EventEmitter<void>();

	exercises: ExerciseModel[] = [];

	constructor( private _trainingService: TrainingService ) { }

	ngOnInit() {
		this.exercises = this._trainingService.getAvaibleExcercises();
	}

	onStartTraining() {
		this.trainingStart.emit();
	}
}
