import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExerciseService } from "./exercise.service";
import { ExerciseController } from "./exercise.controller";
import { Exercise } from "../model/exercise.entity";

@Module({
	imports: [TypeOrmModule.forFeature([Exercise])],
	providers: [ExerciseService],
	controllers: [ExerciseController],
	exports: [],
})
export class ExerciseModule {}
