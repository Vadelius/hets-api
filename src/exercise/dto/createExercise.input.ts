import { IsNotEmpty, MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateExerciseInput {
	@Field()
	@MaxLength(100)
	createdBy: string;

	@Field()
	@IsNotEmpty()
	description: string;

	@Field()
	multiplier: number;
}
