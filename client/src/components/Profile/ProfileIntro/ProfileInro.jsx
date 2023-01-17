import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileUpdate } from '../../../redux/auth/action';
import FbCard from "../../FbCard/FbCard";
import FbModal from '../../FbModal/FbModal';


const ProfileInro = () => {
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth)
    const [bioShow, setBioShow] = useState(false);
    const [bio, setBio] = useState(user.bio || "");
    const [remain, setRemain] = useState(101 - bio.length);
    const [saveBtn, setSaveBtn] = useState(false);
    const [editDetails, setEditDetails] = useState(false);



    const handleBioShow = () => {
        setBioShow(!bioShow);
        setSaveBtn(false);
    }

    const handleBioChange = (e) => {
        if ((remain > 0) && (remain < 101)) {
            setBio(e.target.value);
            setRemain(101 - e.target.value.length)
        }
        setSaveBtn(true);
    }

    const handleBioUpdate = (e) => {
        e.preventDefault();
        dispatch(profileUpdate(user._id, { bio }, setBioShow));
    }



    return (
        <>



            <FbCard>
                <div className="user-personal-info">
                    <h3>Intro</h3>
                    <div className="bio">
                        {user.bio && !bioShow && <>
                            <p>{user.bio}</p>
                            <button onClick={handleBioShow} className="personal-info-button">Edit bio</button>
                        </>
                        }
                        {!user.bio && !bioShow && <>
                            <p></p>
                            <button onClick={handleBioShow} className="personal-info-button">Add bio</button>
                        </>
                        }

                        {bioShow && <div className="click-update">
                            <textarea onChange={handleBioChange} placeholder='Describe who you are' value={bio}></textarea>
                            <p>{remain} characters remaining</p>
                            <div className="click-update-btn">
                                <div className="bio-status">
                                    <div className="global-icon" style={{ background: `url("https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/HgfBXTEArfp.png?_nc_eui2=AeFIS61A8GcXo5WHMw1ZcVRwc6lHD9kG4H5zqUcP2Qbgfn0ufsscByOm7TWCt_0rR-AQv0Kl_P4nyfabRJsgxPQ1")` }}></div>
                                    <p>Public</p>
                                </div>
                                <div className="bio-btn">
                                    <button onClick={handleBioShow}>Cancel</button>
                                    <button onClick={handleBioUpdate} className={`${saveBtn && "save-btn"}`} disabled={!saveBtn ? true : false} >Save</button>
                                </div>
                            </div>
                        </div>}




                    </div>
                    <div className="personail-details">
                        <ul>
                            <li>
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png?_nc_eui2=AeHiEfVg0GAKCAOWnl7JyzaOC7xezJFSLOkLvF7MkVIs6RxQJycIuQ-JMwraGhfo1TWsIqwyPaijkFaqu119vcBj " alt="" />
                                <span> <span className="bold-text">Profile</span> - Digital Creator</span>
                            </li>
                            <li>
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/Q9Qu4uLgzdm.png?_nc_eui2=AeFdJ0HlPIzlyMknSfScRrn5QE0O-ZdJm-NATQ75l0mb4-Q2M_FlPnXsc4uVnEQoDfv0yNoErKR7l8qpJtj2iioL " alt="" />
                                <span>Former Front-end Developer at  <span className="bold-text">DigitalGregg</span></span>
                            </li>

                            <li>
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png?_nc_eui2=AeHiEfVg0GAKCAOWnl7JyzaOC7xezJFSLOkLvF7MkVIs6RxQJycIuQ-JMwraGhfo1TWsIqwyPaijkFaqu119vcBj" alt="" />
                                <span>Studied at <span className="bold-text">Madhupur College</span></span>
                            </li>

                            <li>
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png?_nc_eui2=AeHiEfVg0GAKCAOWnl7JyzaOC7xezJFSLOkLvF7MkVIs6RxQJycIuQ-JMwraGhfo1TWsIqwyPaijkFaqu119vcBj" alt="" />
                                <span>Lives in <span className="bold-text">Tangail</span></span>
                            </li>

                            <li>
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/-e1Al38ZrZL.png?_nc_eui2=AeFm9rLjLQKnoFo3jHm5bOPLyuB9xaeJwC_K4H3Fp4nAL5vmsvA1DmgA2fA9F7xB1v1gyqTNysrUs225zt0ZzlSc" alt="" />
                                <span>From <span className="bold-text">Madhupur</span></span>
                            </li>
                            <li>
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/S0aTxIHuoYO.png?_nc_eui2=AeE9pH04Cpot7IW1lywmUZ2HrlG3yvH4CWGuUbfK8fgJYeWXnsUqJY6CAr8B2lDgzOpsRMAXBYky0JpiOm0-6pOt" alt="" />
                                <span>Single</span>
                            </li>

                            <li>
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/BQdeC67wT9z.png?_nc_eui2=AeFTPsXUG1ZQumUkWdQYJ-DIC-BjLWjhL2AL4GMtaOEvYI6BP3QMKIeTu6tq_qsFyMnmPCEDMFQBAZxZKJ5ukQOQ" alt="" />
                                <span><a href="/me" target="_blank" style={{ color: "#3c44d6" }}>developermahir.com</a></span>
                            </li>

                        </ul>


                        {editDetails && <FbModal
                            title="Edit Details"
                            closepopup={ setEditDetails}
                        
                        >
                            <h1>Me</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, maiores.</p>
                        </FbModal>}




                        <button onClick={() => setEditDetails(!editDetails )} className="personal-info-button">Edit Details</button>
                    </div>
                    <div className="hobbies">

                        <div className="hobbies-list">

                            <div className="hobbies-list-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Earth_icon_2.png" alt="" />
                                <span>Traveling</span>
                            </div>
                            <div className="hobbies-list-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Earth_icon_2.png" alt="" />
                                <span>Traveling</span>
                            </div>
                            <div className="hobbies-list-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Earth_icon_2.png" alt="" />
                                <span>Traveling</span>
                            </div>
                            <div className="hobbies-list-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Earth_icon_2.png" alt="" />
                                <span>Coding</span>
                            </div>
                            <div className="hobbies-list-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Earth_icon_2.png" alt="" />
                                <span>Traveling</span>
                            </div>

                        </div>


                        <button className="personal-info-button">Edit hobbies</button>
                    </div>


                    <div className="profile-featured">
                        <div className="profile-featured-gallery">

                            <div className="profile-featured-item">
                                <div style={{ backgroundImage: `url('https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/325217908_475384531450974_296854693882673217_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=103&ccb=1-7&_nc_sid=a4a2d7&_nc_eui2=AeGC0ex4OQV37yyNB1cOcGR4Gy8IA9l7DlUbLwgD2XsOVavC5g0KMXR-Cge7UrWaaqjd--OT5jPYxNrAzbAV9VZJ&_nc_ohc=BT6z9Is2QygAX-SRKCg&_nc_ht=scontent.fdac27-2.fna&oh=00_AfDRz-5WCRqH1ZwVgLPXRn72GusJalj7lOea2cIhHrHjeg&oe=63C4F5CB')` }} className="profile-featured-photo">
                                </div>
                                <span className="featured-count">+35</span>
                            </div>
                            <div className="profile-featured-item">
                                <div style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dirili%C5%9F_Ertu%C4%9Frul_S1.jpg/220px-Dirili%C5%9F_Ertu%C4%9Frul_S1.jpg')` }} className="profile-featured-photo">
                                </div>
                                <span className="featured-count">+35</span>
                            </div>
                            <div className="profile-featured-item">
                                <div style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dirili%C5%9F_Ertu%C4%9Frul_S1.jpg/220px-Dirili%C5%9F_Ertu%C4%9Frul_S1.jpg')` }} className="profile-featured-photo">
                                </div>
                                <span className="featured-count">+35</span>
                            </div>




                        </div>

                        <button className="personal-info-button">Add  Featured</button>
                    </div>


                </div>
            </FbCard>




        </>
    )
}

export default ProfileInro;