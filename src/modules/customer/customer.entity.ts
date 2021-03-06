import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "../user/user.entity";
import { Routine } from "../routine/routine.entity";

@Entity('customers')
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 25, nullable: false })
    name: string;

    @Column({ type: 'int', unique: true, nullable: false })
    dni: number;

    @Column({ type: 'int', nullable: false })
    years: number;

    @Column({ type: 'varchar', nullable: false })
    email: string;

    @Column({ type: 'int', nullable: false })
    mobilePhone: number;

    @Column({ type: 'varchar', nullable: false })
    address: string;

    @OneToOne(type => User)
    @JoinColumn()
    user: User;

    @ManyToOne(type => Routine)
    routine: Routine;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;
}
