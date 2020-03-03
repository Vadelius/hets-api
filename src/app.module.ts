import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { configService } from "./config/config.service";
import { ActivityModule } from "./activity/activity.module";
import { ExerciseModule } from "./exercise/exercise.module";
import { UserModule } from "./user/user.module";
import { TaskModule } from "./task/task.module";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
	imports: [
		TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
		GraphQLModule.forRoot({
			autoSchemaFile: "schema.gpl",
		}),
		ActivityModule,
		ExerciseModule,
		UserModule,
		TaskModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
