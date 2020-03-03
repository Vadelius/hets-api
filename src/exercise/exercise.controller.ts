import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { Exercise } from "./exercise.entity";
import { ExerciseService } from "./exercise.service";

@Controller("exercise")
export class ExerciseController {
	constructor(private readonly service: ExerciseService) {}

	@Get()
	public async getAll() {
		return await this.service.getAll();
	}
	@Post()
	create(@Body() exercise: Exercise) {
		return this.service.create(exercise);
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.service.getOne(id);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.service.delete(id);
	}
}
