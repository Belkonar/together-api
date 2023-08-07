import { ObjectId } from 'mongodb';

interface ModelBase {
  _id: ObjectId;
}

interface UserDoc {
  _id: string; // this one's a string because I don't generate it.
  displayName: string;
}

interface GroupDoc extends ModelBase {
  name: string;
}

type GroupNoId = Omit<GroupDoc, '_id'>;
