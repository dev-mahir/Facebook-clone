import React from 'react';
import './PopupFullWidth.css';
import close from '../../assets/icons/cross.png'
import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';


const PopupFullWidth = ({ hide, children }) => {
    return (
        <div className='popup-full-wrapper'>
            <div className="popup-fullclose">
                <div className='popup-close-sec'>
                    <button onClick={() => hide(false)}>
                        <img src={close} alt="" />
                    </button>
                    <Link to="">
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className="x1lliihq x1k90msu x2h7rmj x1qfuztq x1ssd25i" fill="url(#jsc_s_l)" height={40} width={40}><defs><linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_l"><stop offset="0%" stopColor="#0062E0" /><stop offset="100%" stopColor="#19AFFF" /></linearGradient><linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_l"><stop offset="0%" stopColor="#0062E0" /><stop offset="100%" stopColor="#19AFFF" /></linearGradient></defs><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" fill="url(&quot;#jsc_s_l&quot;)" /><path className="xe3v8dz" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z" fill="#FFFFFF" /></svg>
                    </Link>
                </div>
                <UserMenu/>
            </div>

            { children}
        </div>
    )
}

export default PopupFullWidth;