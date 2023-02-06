import React from 'react';
import './ClickUpdate.css'

const ClickUpdate = ({hide,data,save, data2 = null}) => {

   

    return (
        <div className="click-update">
            <textarea onChange={(e) => data.setData(e.target.value)} value={data.data} placeholder={data.placeholder} ></textarea>
            
            {data2 && <textarea onChange={(e) => data2.setData(e.target.value)} value={data2.data} placeholder={data2.placeholder} ></textarea>}
            
            <div className="click-update-btn">
                <div className="bio-status">
                    <div className="global-icon" style={{ background: `url("https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/HgfBXTEArfp.png?_nc_eui2=AeFIS61A8GcXo5WHMw1ZcVRwc6lHD9kG4H5zqUcP2Qbgfn0ufsscByOm7TWCt_0rR-AQv0Kl_P4nyfabRJsgxPQ1")` }}></div>
                    <p>Public</p>
                </div>
                <div className="bio-btn">
                    <button onClick={() => hide(false)}>Cancel</button>
                    <button onClick={() =>save()} className=' bg-blue save-btn' >Save</button>
                </div>
            </div>
        </div>
    )
}

export default ClickUpdate