import { MigrationInterface, QueryRunner } from "typeorm";

export class a1583166112654 implements MigrationInterface {
	name = "a1583166112654";

	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createDateTime"`, undefined);
		await queryRunner.query(
			`ALTER TABLE "user" ADD "created" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`,
			undefined,
		);
		await queryRunner.query(
			`ALTER TABLE "user" ADD "updated" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`,
			undefined,
		);
	}

	public async down(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updated"`, undefined);
		await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "created"`, undefined);
		await queryRunner.query(
			`ALTER TABLE "user" ADD "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`,
			undefined,
		);
	}
}
