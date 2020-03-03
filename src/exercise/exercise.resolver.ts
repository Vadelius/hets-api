/* eslint-disable @typescript-eslint/no-unused-vars-experimental,@typescript-eslint/no-unused-vars */
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { Exercise } from "./exercise.entity";
import { ExerciseService } from "./exercise.service";
import { CreateExerciseInput } from "./dto/createExercise.input";
import { PubSub } from "apollo-server-express";

const pubSub = new PubSub();

@Resolver(of => Exercise)
export class ExerciseResolver {
	constructor(private readonly exerciseService: ExerciseService) {}
	@Query(returns => [Exercise])
	exercises(): Promise<Exercise[]> {
		return this.exerciseService.getAll();
	}
	@Mutation(returns => Exercise)
	async addExercise(@Args("newExerciseData") newExerciseData: CreateExerciseInput): Promise<Exercise> {
		const exercise = await this.exerciseService.create(newExerciseData);
		await pubSub.publish("exerciseAdded", { exerciseAdded: exercise });
		return exercise;
	}
}
