import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "user" })
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ type: "varchar", length: 300 })
	username: string;

	@Column({ type: "integer", nullable: true, default: 0 })
	points: number;

	@Column({ type: "varchar", length: 300 })
	email: string;

	@Column({ type: "boolean", default: false })
	activated: boolean;

	@CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
	created: Date;

	@UpdateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
	updated: Date;

	@Column({ type: "varchar", length: 300 })
	deviceId: string;

	@Column({ type: "varchar", length: 300 })
	authSubject: string;
}
