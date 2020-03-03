/* eslint-disable @typescript-eslint/no-unused-vars-experimental,@typescript-eslint/no-unused-vars */
import { Resolver, Query, Args } from "@nestjs/graphql";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import { NotFoundException } from "@nestjs/common";

@Resolver(of => User)
export class UserResolver {
	constructor(private readonly userService: UserService) {}
	@Query(returns => [User])
	users(): Promise<User[]> {
		return this.userService.getAll();
	}

	@Query(returns => User)
	async user(@Args("id") id: string): Promise<User> {
		const user = await this.userService.getOne(id);
		// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
		if (!user) {
			throw new NotFoundException(id);
		}
		return user;
	}
}
