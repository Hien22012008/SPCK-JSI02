import React from 'react';
import { useState } from 'react'

const Checkpoint2 = () => {
    const [value, setValue] = useState('')
    const [values, setValues] = useState([])

    return (
        <div style={{ padding: '20px' }}>
            <input 
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button>Enter job to update</button>

            <ul>
                {values.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    );
};

export default Checkpoint2;