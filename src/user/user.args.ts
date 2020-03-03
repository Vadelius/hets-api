import { Max, Min } from "class-validator";
import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
export class UserArgs {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental,@typescript-eslint/no-unused-vars
	@Field(type => Int)
	@Min(0)
	skip = 0;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental,@typescript-eslint/no-unused-vars
	@Field(type => Int)
	@Min(1)
	@Max(50)
	take = 25;
}
