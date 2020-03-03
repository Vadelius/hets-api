/* eslint-disable @typescript-eslint/no-unused-vars-experimental,@typescript-eslint/no-unused-vars */

import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Activity } from "./activity.entity";
import { ActivityService } from "./activity.service";
import { PubSub } from "apollo-server-express";
import { CreateActivityInput } from "./dto/createActivity.input";

const pubSub = new PubSub();

@Resolver(of => Activity)
export class ActivityResolver {
	constructor(private readonly activityService: ActivityService) {}

	@Query(returns => [Activity])
	activities(): Promise<Activity[]> {
		return this.activityService.getAll();
	}

	@Mutation(returns => Activity)
	async addActivity(@Args("newActivityData") newActivityData: CreateActivityInput): Promise<Activity> {
		const activity = await this.activityService.create(newActivityData);
		await pubSub.publish("activityAdded", { activityAdded: activity });
		return activity;
	}
}
