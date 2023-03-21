import { useState } from 'react';
import { EditOutlined, DeleteFilled, HeartTwoTone, MailOutlined, PhoneOutlined, GlobalOutlined, HeartFilled } from '@ant-design/icons';
import { Button, Modal, Space, Typography } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';

import { API } from '@/components/constants/url';
import { Color } from '@/components/constants/color';
import { LikeIconProps, UserItemProps } from '@/components/constants/types';
import EditUser from './editUser';
import styles from '@/styles/User.module.css';
import UserCard from '@/components/Card';

const { Title, Text } = Typography;

export default function UserItem({ user, deleteItem, editUserItem }: UserItemProps) {
    const [openEditMode, setOpenEditMode] = useState(false);
    const [likeUser, setLikeUser] = useState(false);
    const [ contextHolder] = Modal.useModal();

    const avatarUrl = `${API.AVATAR_URL_FIRST_PART}${user?.username}${API.AVATAR_URL_LAST_PART}`;

    const { confirm } = Modal;


    const showConfirm = () => {
        confirm({
            title: 'Do you Want to delete these user?',
            icon: <ExclamationCircleFilled />,
            content: <UserDetails />,
            onOk() {
                deleteItem(user?.id);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };


    const UserDetails = () => (
        <>
            <Title level={5}>{user?.name}</Title>
            <Space direction="vertical">
                <Text className={styles.secondaryText}>
                    <MailOutlined className={styles.actionButton} />
                    {user?.email}
                </Text>
                <Text className={styles.secondaryText}>
                    <PhoneOutlined className={styles.actionButton} />
                    {user?.phone}
                </Text>
                <Text className={styles.secondaryText}>
                    <GlobalOutlined className={styles.actionButton} />
                    {user?.website}
                </Text>
            </Space>
        </>
    );

    const LikeIcon = ({ filled, onClick }: LikeIconProps) => {
        const IconComponent = filled ? HeartFilled : HeartTwoTone;
        const twoToneColor = filled ? undefined : Color.red;
        const style = filled ? styles.likeIcon : styles.fontRegular

        return (
            <IconComponent
                key="like"
                twoToneColor={twoToneColor}
                className={style}
                onClick={onClick}
            />
        );
    };
    
    return (
        <>
            <EditUser open={openEditMode}
                setOpen={setOpenEditMode} user={user} key={user?.id} editUserItem={editUserItem} />

            <UserCard
                actions={[
                    <LikeIcon key="like" filled={likeUser} onClick={() => setLikeUser(!likeUser)} />,
                    <EditOutlined
                        key="edit"
                        className={styles.fontRegular}
                        onClick={() => setOpenEditMode(!openEditMode)}
                    />,
                    <DeleteFilled
                        key="delete"
                        className={styles.fontRegular}
                        onClick={showConfirm}
                    />,
                ]}
                title={user?.name}
                customComponent={<UserDetails />}
                avatar={avatarUrl}
            />
        </>
    );
}
