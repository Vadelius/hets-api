import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Activity } from "./activity.entity";
import { CreateActivityInput } from "./dto/createActivity.input";

@Injectable()
export class ActivityService {
	constructor(@InjectRepository(Activity) private readonly repo: Repository<Activity>) {}

	public async getOne(id: string) {
		return await this.repo.findOne(id);
	}

	public async getAll(): Promise<Activity[]> {
		return await this.repo.find();
	}

	public async create(dtoInput: CreateActivityInput): Promise<Activity> {
		const newActivity = this.repo.create({
			...dtoInput,
		});
		await this.repo.insert(newActivity);
		return newActivity;
	}

	public async delete(id: string) {
		return await this.repo.delete(id);
	}
}
