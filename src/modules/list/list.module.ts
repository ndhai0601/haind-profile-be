import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { Board } from '../board/entities/board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([List, Board])],
  controllers: [ListController],
  providers: [ListService],
})
export class ListModule {}
