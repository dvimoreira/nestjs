import { Category } from 'src/category/entities/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity({ name: 'produtos' })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idCategoria: number;

    @OneToMany(() => Category, category => category.id)
    @JoinColumn({ name: "idCategoria" })
    category: Category

    @Column()
    codigo: string;

    @Column()
    nome: string;

    @Column('text')
    descricao: string;

    @Column('decimal')
    valor: number;

    @Column('int')
    status: number;
}
