import React from 'react';
import { UserOutlined, DownloadOutlined, BookOutlined, TagOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { useHistory } from 'react-router-dom' 
import '../../Css/HeaderCss.css'

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
    {
      label: 'Login',
      key: 'login',
      icon: <UserOutlined />,
    },
    {
      label: 'Register',
      key: 'register',
    },
  ];

const Header = () => {
  const history = useHistory();
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
      console.log('click ', e.key);
      setCurrent(e.key);
      history.push(e.key)
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
  };
export default Header;

