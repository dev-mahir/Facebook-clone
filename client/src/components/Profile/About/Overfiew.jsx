import React from 'react'
import { briefcase } from '../Icons/breifcase'
import { global } from '../Icons/global'
import { three_dots } from '../Icons/three_dots'

const Overfiew = () => {
    return (
        <>
            <div className='about_overview_item'>
                <div className='item-left'>
                    <span className='icon'>{briefcase} </span>
                    <span> Former Front-end Developer at <a href="">DigitalGregg</a> </span>
                </div>
                <div className='item-right'>
                    <span>{global}</span>
                    <button> {three_dots}</button>
                </div>
            </div>

            <div className='about_overview_item'>
                <div className='item-left'>
                    <span className='icon'>{briefcase} </span>
                    <span> Studied at Madhupur College </span>
                </div>
                <div className='item-right'>
                    <span>{global}</span>
                    <button> {three_dots}</button>
                </div>
            </div>

        </>
    )
}

export default Overfiew