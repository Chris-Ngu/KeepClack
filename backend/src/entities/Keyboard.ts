import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export default class Keyboard extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    listingName!: string

    @Column()
    price!: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    soldAt: string;
}