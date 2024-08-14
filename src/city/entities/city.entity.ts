import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { StateEntity } from '../../state/entities/state.entity';

@Entity()
export class City {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'state_id', nullable: false })
    stateId: number;

    @ManyToOne(() => StateEntity, state => state.id)
    state: StateEntity;

    @Column({ name: 'created_at' })
    createdAt: Date;

    @Column({ name: 'updated_at' })
    updatedAt: Date;
}
