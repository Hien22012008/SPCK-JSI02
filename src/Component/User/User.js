import React from 'react'
import { Avatar, Divider } from 'antd';

const User = ({ user }) => {
    console.log("🚀 ~ file: User.js:5 ~ User ~ user:", user)
    return (
        <div>
            <div style={{ margin: '10px' }}>
                <Avatar size={{ xs: 100, sm: 100, md: 100, lg: 100, xl: 100, xxl: 100 }} src={user?.avt} />
            </div>

            <Divider style={{ background: 'white' }} />

            <div style={{ paddingTop: '10px' }}>
                <h1>{user?.userName}</h1>
            </div>

            <Divider style={{ background: 'white' }} />

            <div style={{ paddingTop: '10px' }}>
                <p style={{ color: 'white', paddingTop: '10px' }}>{user?.email}</p>
            </div>
        </div>
    )
}

export default User