import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({unique: true})
    email!: string;

    @Column({unique: true})
    username! :string;

    @Column(() => String)
    password!: string;

    
}