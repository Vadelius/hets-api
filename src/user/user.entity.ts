import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";

@Entity({ name: "user" })
@ObjectType()
export class User {
	@PrimaryGeneratedColumn("uuid")
	// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-unused-vars-experimental
	@Field(type => ID)
	id: string;

	@Field()
	@Column({ type: "varchar", length: 300 })
	username: string;

	@Field({ nullable: true })
	@Column({ type: "integer", nullable: true, default: 0 })
	points: number;

	@Field()
	@Column({ type: "varchar", length: 300 })
	email: string;

	@Field()
	@Column({ type: "boolean", default: false })
	activated: boolean;

	@Field()
	@CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
	created: Date;

	@Field()
	@UpdateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
	updated: Date;

	@Field()
	@Column({ type: "varchar", length: 300 })
	deviceId: string;

	@Field()
	@Column({ type: "varchar", length: 300 })
	authSubject: string;
}
