import React from 'react';

export default function Square({ value, handleClick }) {
    return (
        <button id='square' className='square' onClick={handleClick}>{value}</button>
    );
}
