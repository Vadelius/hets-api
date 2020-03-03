import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";

@Entity({ name: "activity" })
@ObjectType()
export class Activity {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-unused-vars-experimental
	@Field(type => ID)
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field()
	@CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
	created: Date;

	@Field()
	@Column({ type: "varchar", length: 300 })
	createdBy: string;

	@Field()
	@Column({ type: "varchar", length: 300 })
	description: string;

	@Field()
	@Column({ type: "integer" })
	points: number;

	@Field()
	@Column({ type: "integer" })
	duration: number;

	@Field()
	@Column({ type: "varchar", length: 300 })
	exerciseId: string;

	@Field({ defaultValue: false })
	@Column({ type: "boolean", default: false })
	verified: boolean;
}
