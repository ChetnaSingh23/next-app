import React, { useEffect, useState } from 'react';

import { API } from '@/components/constants/url';
import { User as UserProps } from '@/components/constants/types';
import Loader from '@/components/Loader';
import UserList from './userList';

const userApi = async () => {
  const response = await fetch(API.USER_LIST);
  return await response.json();
}

export default function User() {
  const [userList, setUserList] = useState<UserProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    userApi().then((user) => {
      setIsLoading(false);
      setUserList(user);
    });
  }, []);

  const deleteUser = async (id: number) => {
    const filteredUser = userList.filter((user: UserProps) => user.id !== id);
    setUserList(filteredUser);

    // deleteUser(id).then(() => {
    //     //Update userlist state if this api is 200
    //     //here in this example its successful but the userlist api is not updated
    // })
  };

  const editUser = async (id: number, newUser: UserProps) => {    
    const updatedUserList = userList.map((user: UserProps) => {
      if (user.id === id) {
        return { ...user, ...newUser };
      }
      return user;
    });
    setUserList(updatedUserList);
  };

  if (isLoading || !userList) return <Loader />;

  return <UserList users={userList} deleteUser={deleteUser} editUser={editUser} />;
}
