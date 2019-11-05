import React from 'react';

import s from './Footer.module.sass';
import LikeBtn from './LikeBtn.jsx'

const DownMenu = () => {
    return (
        <div className={s.Menu}>
        	<a href='/'><div className={s.MenuDiv} id={s.MainMenu}><span>Main</span></div></a>
        	<a href='/Contact'><div className={s.MenuDiv} id={s.ContactMenu}><span>Contact</span></div></a>
        	<LikeBtn />
        </div>
    )
}

export default DownMenu;