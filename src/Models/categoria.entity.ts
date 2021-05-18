import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codigo: string;

    @Column()
    titulo: string;

    @Column()
    status: string;
}