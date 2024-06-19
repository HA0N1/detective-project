import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DetectivePost } from './entities/detective-post.entity';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Region } from './entities/region.entity';
import { RegionEnum } from './type/region.type';
import { Career } from './entities/career.entity';
import { License } from './entities/license.entity';
import { Equipment } from './entities/equipment.entity';
import { Category } from './entities/category.entity';

@Injectable()
export class PostService {
  constructor(private readonly dataSource: DataSource) {}
  // 탐정 프로필 생성
  async createProfile(createPostDto: CreatePostDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const career = await queryRunner.manager.save(Career, createPostDto.career);
      const license = await queryRunner.manager.save(License, createPostDto.license);
      const equipment = await queryRunner.manager.save(Equipment, createPostDto.equipment);
      const region = await queryRunner.manager.save(Region, createPostDto.region);
      const category = await queryRunner.manager.save(Category, createPostDto.category);
      console.log(career);
      const detectivePost = new DetectivePost();
      detectivePost.description = createPostDto.description;
      detectivePost.careerId = career.id;
      detectivePost.licenseId = license.id;
      detectivePost.regionId = region.id;
      detectivePost.categoryId = category.id;
      detectivePost.equipmentId = equipment.id;

      await queryRunner.manager.save(detectivePost);
      await queryRunner.commitTransaction();

      return detectivePost;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw new Error(`프로필 생성에 실패하였습니다: ${err.message}`);
    } finally {
      await queryRunner.release();
    }
  }

  daeunbabo() {
    return { message: 'hi' };
  }
}
