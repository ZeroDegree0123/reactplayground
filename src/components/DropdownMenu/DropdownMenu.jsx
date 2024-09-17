import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import './DropdownMenu.css'
import { ReactComponent as CogIcon } from '../../icons/cog.svg'
import DropdownMenuItem from '../DropdownMenuItem/DropdownMenuItem'

export default function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');

    return (
        <div className='dropdown'>
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                className='menu-primary'
            >
                <div className='menu'>
                    <DropdownMenuItem setActiveMenu={setActiveMenu}>My Profile</DropdownMenuItem>
                    <DropdownMenuItem
                        setActiveMenu={setActiveMenu}
                        leftIcon={<CogIcon />}
                        goToMenu="settings"
                    >Settings</DropdownMenuItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                unmountOnExit
                timeout={500}
                className='menu-secondary'
            >
                <div className='menu'>
                    <DropdownMenuItem setActiveMenu={setActiveMenu}>Settings</DropdownMenuItem>
                    <DropdownMenuItem
                        setActiveMenu={setActiveMenu}
                        leftIcon={<CogIcon />}
                        goToMenu="main"
                    >Settings</DropdownMenuItem>
                </div>
            </CSSTransition>
        </div>
    )
}
