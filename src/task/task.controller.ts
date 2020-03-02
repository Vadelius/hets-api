import { Controller, Post, Body } from "@nestjs/common";
import { TaskService } from "./task.service";
import { AddPointsParams } from "src/common/Interfaces";

@Controller("task")
export class TaskController {
	constructor(private readonly service: TaskService) {}

	/** Takes { id: string, points: number } and adds the points to the users total */
	@Post("/addpoints")
	addPoints(@Body() params: AddPointsParams) {
		return this.service.addPointsToUser(params);
	}

	@Post("/validateid")
	validateId(@Body() id: string) {
		return this.service.validateId(id);
	}
}
