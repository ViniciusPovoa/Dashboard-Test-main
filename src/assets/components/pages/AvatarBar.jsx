import React, { useState } from 'react';
import { Avatar } from '@mui/material'; 
import '../styles/avatars.css'

const AvatarBar = () => {
    const menuItems = ["Perfil", "Configurações", "Sair"];
    const [open, setOpen] = useState(false);

    const ativaMenu = () => {
        setOpen(!open);
    }

    return (
        <>
            <div className="avatar-container">
                <Avatar
                    onClick={ativaMenu}
                    className='avatar'
                    alt='Ketlyn Laury'
                    src='https://github.com/KetlynLaury.png'
                />
                <div className={`menuItens ${open ? 'open' : ''}`}>
                    <ul>
                        {
                            menuItems.map((menu) => (
                                <li onClick={() => setOpen(false)} className='listItens' key={menu}> {menu} </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default AvatarBar;
