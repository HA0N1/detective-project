import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Index,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Detective } from '../../user/entities/detective.entity';
import { Location } from './location.entity';

@Entity({ name: 'detective_office' })
export class DetectiveOffice {
  @PrimaryGeneratedColumn('increment', { type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'bigint', name: 'owner_id', nullable: false })
  ownerId: number;

  @Column({ type: 'bigint', name: 'region_id', nullable: true })
  regionId: number;

  @Column({ type: 'bigint', name: 'location_id', nullable: false })
  locationId: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  businessRegistrationNum: string;

  @Column({ type: 'varchar', nullable: false })
  founded: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Index('detective_office_location_id_index')
  @ManyToOne(() => Location, (location) => location.detectiveOffice)
  @JoinColumn({ name: 'location_id' })
  location: Location;

  @OneToMany(() => Detective, (detective) => detective.detectiveOffice)
  detective: Detective[];
}
