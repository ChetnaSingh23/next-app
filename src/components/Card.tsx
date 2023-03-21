import React from 'react';
import { Card } from 'antd';
import Image from 'next/image'

interface CardProps {
    actions: Array<any>;
    customComponent: any;
    avatar: string;
    title: string;
}

const UserCard = (props: CardProps) => (
    <Card
        cover={
            <Image
                alt="User Card"
                src={props.avatar}
                width={200}
                height={200}
                style={{backgroundColor: '#f5f5f5'}}
            />
        }
        actions={props.actions}
    >
        {props.customComponent}
    </Card>
);

export default UserCard;