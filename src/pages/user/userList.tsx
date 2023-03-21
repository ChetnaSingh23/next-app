import { List } from 'antd';

import UserItem from './item';
import { UserListProps }  from '@/components/constants//types';

export default function UserList(props: UserListProps) {
  const { users , deleteUser , editUser} = props;

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      dataSource={users}
      renderItem={(item) => (
        <List.Item>
          <UserItem key={item.id} user={item} deleteItem={deleteUser} editUserItem={editUser} />
        </List.Item>
      )}
    />
  )
}
