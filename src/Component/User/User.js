import React from 'react'
import { Avatar, Space } from 'antd';

const User = ({ user }) => {
    console.log("🚀 ~ file: User.js:5 ~ User ~ user:", user)
    return (
        <div>
            <Space direction="vertical" size={16}>
                <Space wrap size={16}>
                    <Avatar size={100} src={user?.avt} />
                </Space>
            </Space>
            <div style={{paddingTop: '10px'}}>
                <h1>{user?.userName}</h1>
            </div>
            <div style={{paddingTop: '10px'}}>
                <p style={{color: 'white', paddingTop: '10px'}}>{user?.email}</p>
            </div>
        </div>
    )
}

export default User