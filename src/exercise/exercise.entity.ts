import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";

@Entity({ name: "exercise" })
@ObjectType()
export class Exercise {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental,@typescript-eslint/no-unused-vars
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
	@Column({ type: "float", nullable: false })
	multiplier: number;

	@Field()
	@Column({ type: "boolean", default: false })
	verified: boolean;
}
