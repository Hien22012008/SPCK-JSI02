import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react'

const Checkpoint2 = () => {
    const handleValue = () => {
       setValue(value);
    }
    const [value, setValue] = useState('')
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '50px 0', width: '300px'}}>
                    <Input placeholder="Enter job to update" onChange={(e) => setValue(e.target.value)}/>
                <button onClick={() => handleValue()}> Enter Work </button>
            </div>
            <div>
                <h1>Work list:</h1>
                
            </div>
            <h1>{value}</h1>
        </div>
    );
};

export default Checkpoint2;