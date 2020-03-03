import { IsNotEmpty, MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateActivityInput {
	@Field()
	@MaxLength(100)
	createdBy: string;

	@Field()
	@IsNotEmpty()
	description: string;

	@Field()
	points: number;

	@Field()
	duration: number;

	@Field()
	@IsNotEmpty()
	exerciseId: string;
}
