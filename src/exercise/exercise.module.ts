import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExerciseService } from "./exercise.service";
import { ExerciseController } from "./exercise.controller";
import { Exercise } from "./exercise.entity";
import { ExerciseResolver } from "./exercise.resolver";

@Module({
	imports: [TypeOrmModule.forFeature([Exercise])],
	providers: [ExerciseService, ExerciseResolver],
	controllers: [ExerciseController],
	exports: [],
})
export class ExerciseModule {}
