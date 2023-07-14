import React from 'react'
import { Avatar, Space } from 'antd';

const User = () => {



    return (
        <div>
            <Space direction="vertical" size={16}>
                <Space wrap size={16}>
                    <Avatar size={100}/>
                </Space>
            </Space>
        </div>
    )
}

export default User