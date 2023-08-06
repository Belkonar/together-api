interface ModelBase {
  _id: string;
}

interface User extends ModelBase {
  displayName: string;
}

interface Group extends ModelBase {
  name: string;
}
