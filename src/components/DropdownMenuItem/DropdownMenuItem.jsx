import './DropdownMenuItem.css'
import React from 'react'

export default function DropdownMenuItem(props) {
    return (
        <a href="#" className='menu-item' onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}>
            <span className='icon-button'>{props.leftIcon}</span>
            {props.children}
            <span className='icon-right'>{props.rightIcon}</span>
        </a>
    )
}
