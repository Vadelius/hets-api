import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({ name: "exercise" })
export class Exercise extends BaseEntity {
	@Column({ type: "varchar", length: 300, nullable: true })
	description: string;

	@Column({ type: "float", nullable: false })
	multiplier: number;

	@Column({ type: "boolean", default: false })
	verified: boolean;
}
