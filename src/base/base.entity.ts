import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Base {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;


}