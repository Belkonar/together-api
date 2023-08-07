import { Body, Controller, Post } from '@nestjs/common';
import { Db, ObjectId } from 'mongodb';
import { GroupDoc, GroupNoId } from '../models';

@Controller('group')
export class GroupController {
  constructor(private readonly db: Db) {}

  @Post()
  async createGroup(@Body() group: GroupNoId): Promise<GroupDoc> {
    const doc: GroupDoc = {
      _id: new ObjectId(),
      ...group,
    };

    await this.db.collection('groups').insertOne(doc);

    return doc;
  }
}
