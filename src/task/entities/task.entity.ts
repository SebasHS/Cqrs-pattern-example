import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    description: string;
    @Column({ default: false })
    completed: boolean;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}