import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DetectivePost } from './detective-post.entity';
import { EquipmentEnum } from '../type/equipment.type';

@Entity({ name: 'equipment' })
export class Equipment {
  @PrimaryGeneratedColumn('increment', { type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'enum', enum: EquipmentEnum, nullable: false })
  name: EquipmentEnum;

  @OneToMany(() => DetectivePost, (detectivePost) => detectivePost.equipment)
  detectivePost: DetectivePost[];
}
