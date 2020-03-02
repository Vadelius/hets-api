import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { ActivityService } from "./activity.service";
import { Activity } from "../model/activity.entity";

@Controller("activity")
export class ActivityController {
	constructor(private readonly service: ActivityService) {}

	@Get()
	public async getAll() {
		return await this.service.getAll();
	}
	@Post()
	create(@Body() activity: Activity) {
		return this.service.create(activity);
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
