import React from 'react';
import './style.scss';

const Error =({message}) => message && (
    <div className='error'>
        {message}
    </div>
)

export default Error;