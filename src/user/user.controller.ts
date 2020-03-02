import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "../model/user.entity";

@Controller("user")
export class UserController {
	constructor(private readonly service: UserService) {}

	@Post("/id")
	findOne(@Body() id: string) {
		return this.service.getOne(id);
	}

	@Get()
	public async getAll() {
		return await this.service.getAll();
	}
	@Post()
	create(@Body() user: User) {
		return this.service.create(user);
	}

	@Delete("/id")
	remove(@Param("id") id: string) {
		return this.service.delete(id);
	}
}
