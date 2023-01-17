import React from 'react';
import './fbmodal.css';
import close from '../../assets/icons/cross.png'

const FbModal = ({ children, title, closepopup}) => {
    return (
        <div className='blur-box'>
            <div className="fb-modal-wrapper">
                <div className="fb-modal-popup">
                    <div className="fb-modal-header">
                        <span className="title">{title}</span>
                        <button onClick={() => closepopup(false)} ><img src={close} alt="" /></button>
                    </div>
                    <div className="divider"></div>
                    <div className="fb-modal-body">
                        { children}
                    </div>
                    <div className="fb-modal-footer"></div>
                </div>
            </div>
        </div>
    )
}

export default FbModal;