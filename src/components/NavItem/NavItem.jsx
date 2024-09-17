import { useState } from 'react';

import './NavItem.css'

export default function NavItem(props) {
    const [open, setOpen] = useState(false)
    console.log('nav-item')
    return (
        <li className='nav-item'>
            <a href="#" className='icon-button' onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    )
}

