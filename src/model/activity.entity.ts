import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({ name: "activity" })
export class Activity extends BaseEntity {
	@Column({ type: "varchar", length: 300, nullable: true })
	description: string;

	@Column({ type: "integer", nullable: false })
	points: number;

	@Column({ type: "integer", nullable: false })
	duration: number;

	@Column({ type: "varchar", length: 300, nullable: false })
	exerciseId: string;

	@Column({ type: "boolean", default: false })
	verified: boolean;
}
