import React from 'react';
import './fbmodal.css';
import close from '../../assets/icons/cross.png'

const FbModal = ({ children, title, closepopup, back = null }) => {

    return (
        <div className='blur-box'>
            <div className="fb-modal-wrapper">
                <div className="fb-modal-popup">
                    <div className="fb-modal-header">
                        {back && <button onClick={() => back()} ><i className='bx bx-arrow-back'></i></button>}
                        <span className="title">{title}</span>
                        {

                            !back && <button onClick={() => closepopup(false)} ><img src={close} alt="" /></button>}                    </div>
                    <div className="divider"></div>
                    <div className="fb-modal-body">
                        {children}
                    </div>
                    <div className="fb-modal-footer"></div>
                </div>
            </div>
        </div>
    )
}

export default FbModal;