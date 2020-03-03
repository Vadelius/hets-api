import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskService } from "./task.service";
import { TaskController } from "./task.controller";
import { User } from "../user/user.entity";

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	providers: [TaskService],
	controllers: [TaskController],
	exports: [],
})
export class TaskModule {}
