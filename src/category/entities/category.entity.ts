import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categorias' })
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codigo: string;

    @Column()
    titulo: string;

    @Column()
    status: string;
}
