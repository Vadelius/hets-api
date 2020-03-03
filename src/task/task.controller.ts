import { Body, Controller, Post } from "@nestjs/common";
import { TaskService } from "./task.service";
import { AddPointsParams, Auth0User } from "src/common/Interfaces";

@Controller("task")
export class TaskController {
	constructor(private readonly service: TaskService) {}

	@Post("/addpoints")
	addPoints(@Body() params: AddPointsParams) {
		return this.service.addPointsToUser(params);
	}

	@Post("/getuserobject")
	getUserObject(@Body() user: Auth0User) {
		return this.service.getUserObject(user);
	}
}
