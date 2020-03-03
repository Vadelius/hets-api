/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../user/user.entity";
import { AddPointsParams, Auth0User } from "src/common/Interfaces";
import { fromString } from "uuidv4";

@Injectable()
export class TaskService {
	constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}

	/**
	 * Adds points to a user by UUID. Returns 1 if no user is found.
	 * @param params - { user: UUID, points: number }
	 */
	public async addPointsToUser(params: AddPointsParams) {
		const USER = await this.userRepo.findOne(params.id);
		if (!USER) {
			return 1;
		}
		USER.points += params.points;
		await this.userRepo.save(USER);
		return `Added ${params.points} to ${USER.username}`;
	}

	/**
	 * Tries to convert sub string to UUID and fetches user by that ID. If it does not exists, creates one (createUser)
	 * @param auth0user The Auth0User profile provided by Auth0 after login.
	 */
	public async getUserObject(auth0user: Auth0User) {
		const uuid = fromString(auth0user.sub); // converts string to UUID.
		const existingUser = await this.userRepo.findOne(uuid);
		if (existingUser !== undefined) {
			return existingUser;
		} else {
			return await this.createUser(auth0user);
		}
	}

	/**
	 * Takes the Auth0User object and maps a new User Entity and saves it in the database.
	 * @param auth0user The Auth0User profile provided by Auth0 after login.
	 */
	private async createUser(auth0user: Auth0User) {
		const newUser = new User();
		newUser.id = fromString(auth0user.sub);
		newUser.email = auth0user.email;
		newUser.username = auth0user.nickname;
		newUser.authSubject = auth0user.sub;
		newUser.deviceId = "device";
		return await this.userRepo.save(newUser);
	}
}
