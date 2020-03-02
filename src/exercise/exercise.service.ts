import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Exercise } from "../model/exercise.entity";

@Injectable()
export class ExerciseService {
	constructor(@InjectRepository(Exercise) private readonly repo: Repository<Exercise>) {}

	public async getOne(id: string) {
		return await this.repo.findOne(id);
	}

	public async getAll(): Promise<Exercise[]> {
		return await this.repo.find();
	}
	public async create(exercise: Exercise) {
		return await this.repo.save(exercise);
	}

	public async delete(id: string) {
		return await this.repo.delete(id);
	}
}
