import React from 'react';
import { UserOutlined, DownloadOutlined, BookOutlined, AppstoreOutlined, HomeOutlined, SmileOutlined } from '@ant-design/icons';
import { Affix, Avatar, Input, Dropdown, Menu, Modal } from 'antd';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const Header = ({ user, notificationLogin }) => {
    const history = useHistory();
    const [current, setCurrent] = useState('mail');
    const [top, setTop] = useState(0);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

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
            icon: <AppstoreOutlined />,
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
        {
            label: 'About',
            key: 'about',
            icon: <SmileOutlined />,
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
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {
                            user?.avt ? <Avatar src={user?.avt} style={{ marginRight: 10 }} /> : <Avatar style={{ marginRight: 10 }} icon={<UserOutlined />} />
                        }
                        <span>{user?.userName}</span>
                    </div>,
                key: 'information-user'


            } : '',
        user ?
            {
                label: <div onClick={() => setOpen(true)}>Log out</div>,
            } : '',
    ];
    console.log("🤔🤔🤔 ~ file: Header.js:10 ~ Header ~ user:", user)

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            handleLogout()
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <Affix offsetTop={top}>
            <div>
                <Menu style={{ background: 'gray', color: 'white' }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                <Modal
                    title="Log out"
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <p>Are you sure you want to log out?</p>
                </Modal>
            </div>
        </Affix>
    )
};
export default Header;