import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../model/user.entity";

@Injectable()
export class UserService {
	constructor(@InjectRepository(User) private readonly repo: Repository<User>) {}

	public async getOne(id: string) {
		return await this.repo.findOne(id);
	}

	public async getAll(): Promise<User[]> {
		return await this.repo.find();
	}
	public async create(user: User) {
		return await this.repo.save(user);
	}

	public async delete(id: string) {
		return await this.repo.delete(id);
	}
}
