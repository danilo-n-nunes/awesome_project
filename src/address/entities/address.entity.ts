import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Address {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'street', nullable: false })
    street: string;

    @Column({ name: 'number', nullable: false })
    number: string;

    @Column({ name: 'complement' })
    complement: string;

    @Column({ name: 'district', nullable: false })
    district: string;

    @Column({ name: 'city_id', nullable: false })
    cityId: number;

    @Column({ name: 'created_at' })
    createdAt: Date;

    @Column({ name: 'updated_at' })
    updatedAt: Date;
}