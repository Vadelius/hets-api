import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Exercise } from "./exercise.entity";
import { CreateExerciseInput } from "./dto/createExercise.input";

@Injectable()
export class ExerciseService {
	constructor(@InjectRepository(Exercise) private readonly repo: Repository<Exercise>) {}

	public async getOne(id: string) {
		return await this.repo.findOne(id);
	}

	public async getAll(): Promise<Exercise[]> {
		return await this.repo.find();
	}

	public async create(dtoInput: CreateExerciseInput): Promise<Exercise> {
		const newExercise = this.repo.create({
			...dtoInput,
		});
		await this.repo.insert(newExercise);
		return newExercise;
	}

	public async delete(id: string) {
		return await this.repo.delete(id);
	}
}
