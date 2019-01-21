export interface ExerciseModel {
	id: string;
	name: string;
	duration: number;
	calories: number;
	// Hacemos opcional este atributo y definimos sus posibles valores
	state?: 'completed' | 'cancelled' | null;
	// Hacemos opcional este atributo
	date?: Date;
}
