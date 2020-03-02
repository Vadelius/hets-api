import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ActivityService } from "./activity.service";
import { ActivityController } from "./activity.controller";
import { Activity } from "../model/activity.entity";

@Module({
	imports: [TypeOrmModule.forFeature([Activity])],
	providers: [ActivityService],
	controllers: [ActivityController],
	exports: [],
})
export class ActivityModule {}
