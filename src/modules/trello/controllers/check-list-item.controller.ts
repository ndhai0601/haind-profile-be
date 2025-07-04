import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CheckListItemService } from '../services/check-list-item.service';

@Controller('check-list-item')
export class CheckListItemController {
  constructor(private readonly checkListItemService: CheckListItemService) {}

  // @Post()
  // create(@Body() createCheckListItemDto: CreateChecklistItemDto) {
  //   return this.checkListItemService.create(createCheckListItemDto);
  // }

  // @Get()
  // findAll() {
  //   return this.checkListItemService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.checkListItemService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateCheckListItemDto: UpdateCheckListItemDto,
  // ) {
  //   return this.checkListItemService.update(+id, updateCheckListItemDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.checkListItemService.remove(+id);
  // }
}
