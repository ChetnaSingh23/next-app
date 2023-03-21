import { Optional } from 'utility-types';

interface Company {
  name: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}
interface UserListProps {
  users: Array<User>;
  deleteUser: (id: number) => void;
  editUser: (id: number, newUser: User) => void;
}

interface EditUserProps {
  key: number;
  user: User;
  editUserItem : (id: number, newUser: User) => void;
  setOpen: (open: boolean) => void;
  open : boolean;
}

interface UserItemProps {
  key: number;
  user: User;
  deleteItem: (id: number) => void;
  editUserItem : (id: number, newUser: User) => void;
}

interface LikeIconProps {
  filled: boolean;
  onClick: () => void;
}

export type {
  User,
  UserListProps,
  EditUserProps,
  UserItemProps,
  LikeIconProps,
};
