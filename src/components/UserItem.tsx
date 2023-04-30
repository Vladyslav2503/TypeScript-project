import React, { FC } from 'react'
import { IUser } from '../types/Types'

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
  return (
    <div onClick={() => onClick(user)}  style={{padding: 15, border: '1px solid gray'}} >
            {user.id}. {user.name} проживає у місті {user.address.city} на вулиці {user.address.street}
        </div>
  )
}

export default UserItem