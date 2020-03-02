import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Activity } from "../model/activity.entity";

@Injectable()
export class ActivityService {
	constructor(@InjectRepository(Activity) private readonly repo: Repository<Activity>) {}

	public async getOne(id: string) {
		return await this.repo.findOne(id);
	}

	public async getAll(): Promise<Activity[]> {
		return await this.repo.find();
	}
	public async create(activity: Activity) {
		return await this.repo.save(activity);
	}

	public async delete(id: string) {
		return await this.repo.delete(id);
	}
}
