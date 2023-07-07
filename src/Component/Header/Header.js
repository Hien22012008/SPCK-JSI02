import React from 'react';
import { UserOutlined, DownloadOutlined, BookOutlined, TagOutlined, HomeOutlined } from '@ant-design/icons';
import { Affix, Avatar, Input, Dropdown, Menu, Space } from 'antd';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import '../../Css/HeaderCss.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const Header = ({ user, notificationLogin }) => {
    console.log("🤔🤔🤔 ~ file: Header.js:10 ~ Header ~ user:", user)
    const history = useHistory();
    const [current, setCurrent] = useState('mail');
    const [top, setTop] = useState(0);

    const handleLogout = async () => {
        try {
            await firebase.auth().signOut();
            localStorage.removeItem("user");
            history.push("/")
            // notification('success', 'Logout success !')
            notificationLogin('success', 'Logout success !')
        } catch (error) {
            notificationLogin('error', error.message);
        }
    };
    const onClick = (e) => {
        console.log('click ', e.key);
        setCurrent(e.key);
        history.push(e.key)
    };
    const items = [
        {
            label: 'Home',
            key: '/',
            icon: <HomeOutlined />,
        },
        {
            label: 'Store',
            key: 'store',
            icon: <TagOutlined />,
        },
        {
            label: 'Library',
            key: 'library',
            icon: <BookOutlined />,
        },
        {
            label: 'Download',
            key: 'download',
            icon: <DownloadOutlined />,
        },
        !user ?
            {
                label: 'Login',
                key: 'login',
                icon: <UserOutlined />,
            } : '',
        !user ?
            {
                label: 'Register',
                key: 'register',
            } : '',
        user ?
            {
                label:
                    <div>
                        {
                            user?.avt ? <Avatar src={user?.avt} style={{ marginRight: 10 }} /> : <Avatar style={{ marginRight: 10 }} icon={<UserOutlined />} />
                        }
                        <span>{user?.userName}</span>
                    </div>

            } : '',
        user ?
            {
                label: <div onClick={handleLogout}>Log out</div>,
            } : '',
    ];

    return (
        <Affix offsetTop={top}>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </Affix>
    )
};
export default Header;

