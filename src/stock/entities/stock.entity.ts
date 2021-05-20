import { Product } from 'src/product/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity({ name: 'estoque' })
export class Stock {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idProduto: number;

    @OneToMany(() => Product, product => product.id)
    @JoinColumn({ name: "idProduto" })
    product: Product

    @Column('int')
    quantidade: number;

    @Column()
    reserva: number;

    @Column('int')
    status: number;
}
