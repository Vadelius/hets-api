import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ActivityService } from "./activity.service";
import { ActivityController } from "./activity.controller";
import { Activity } from "./activity.entity";
import { ActivityResolver } from "./activity.resolver";

@Module({
	imports: [TypeOrmModule.forFeature([Activity])],
	providers: [ActivityService, ActivityResolver],
	controllers: [ActivityController],
	exports: [],
})
export class ActivityModule {}
