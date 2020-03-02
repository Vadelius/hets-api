import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { configService } from "./config/config.service";
import { ActivityModule } from "./activity/activity.module";
import { ExerciseModule } from "./exercise/exercise.module";
import { UserModule } from "./user/user.module";
import { TaskMoudle } from "./task/task.module";

@Module({
	imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()), ActivityModule, ExerciseModule, UserModule, TaskMoudle],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
