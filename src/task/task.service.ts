/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../model/user.entity";
import { AddPointsParams } from "src/common/Interfaces";

@Injectable()
export class TaskService {
	constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}

	/** Takes { id: string, points: number } and adds the points to the users total */
	public async addPointsToUser(params: AddPointsParams) {
		const USER = await this.userRepo.findOne(params.id);
		if (!USER) {
			return "No User with that id.";
		}
		USER.points += params.points;
		this.userRepo.save(USER);
		return `Added ${params.points} to ${USER.username}`;
	}

	/** Check if user (by uuid) exists in database. */
	public async validateId(id: string) {
		console.log(id);
		const USER = await this.userRepo.findOne(id);
		if (USER) {
			return 0;
		}
		if (!USER) {
			return 1;
		}
	}
}
