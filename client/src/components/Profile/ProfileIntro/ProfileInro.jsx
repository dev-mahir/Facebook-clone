import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileUpdate } from '../../../redux/auth/action';
import ClickUpdate from '../../ClickUpdate/ClickUpdate';
import FbCard from "../../FbCard/FbCard";
import FbModal from '../../FbModal/FbModal';
import PopupFullWidth from '../../PopupFullWidth/PopupFullWidth';
import StorySlider from '../../StorySlider/StorySlider';
import featured_banner from '../../../assets/images/featured-banner.png'
import './ProfileIntro.css'


const ProfileInro = () => {
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);

    const [bioShow, setBioShow] = useState(false);
    const [bio, setBio] = useState(user.bio || "");
    const [remain, setRemain] = useState(101 - bio.length);
    const [saveBtn, setSaveBtn] = useState(false);
    const [editDetails, setEditDetails] = useState(false);
    const [catShow, setCatShow] = useState(false);
    const [cat, setCat] = useState(user.category || "");
    const [jobShow, setJobShow] = useState(false);

    const [position, setPosition] = useState();
    const [company, setCompany] = useState();

    const [eduShow, setEduShow] = useState({ type: "" });
    const [school, setSchool] = useState('');
    const [college, setCollege] = useState('');
    const [feturedShow, setFeaturedShow] = useState(false);
    const [addFeturedShow, setAddFeaturedShow] = useState(false);
    const [uploadFeturedShow, setuploadFeaturedShow] = useState(false);
    const [featuredPreview, setFeaturedPreview] = useState([]);
    const [featuredPhoto, setFeaturedPhoto] = useState([]);


    const [modalShow, setModalShow] = useState({
        type: ""
    });


    const handleBioShow = () => {
        setBioShow(!bioShow);
        setSaveBtn(false);
    }


    const handleClickModalShow = (e, type) => {
        e.preventDefault();
        modalShow.type === type ? setModalShow({ type: "" }) : setModalShow({ type: type })
    }



    // Relationship
    const [relationship, setRelationship] = useState(null);
    const handleRelationshipSave = () => {
        dispatch(profileUpdate(user._id, { relationship }, setModalShow));
    }
    const handleRelationshipDelete = (status) => {
        dispatch(profileUpdate(user._id, { relationship: "" }, setBioShow));
    }


    // Home town
    const [home_town, setHome_town] = useState(null);
    const handleHomeTownSave = () => {
        dispatch(profileUpdate(user._id, { home_town }, setModalShow));
    }

    const handleHomeTownDelete = () => {
        dispatch(profileUpdate(user._id, { home_town: null }, setModalShow));
    }


    // Current city
    const [current_town, setCurrent_town] = useState(null);
    const handleCurrentTownSave = () => {
        dispatch(profileUpdate(user._id, { living: current_town }, setModalShow));
    }


    const handleCurrentTownDelete = () => {
        dispatch(profileUpdate(user._id, { living: null }, setModalShow));
    }











    const handleBioChange = (e) => {
        setBio(e.target.value);
        setRemain(101 - e.target.value.length)

        setSaveBtn(true);
    }

    const handleBioUpdate = (e) => {
        e.preventDefault();
        dispatch(profileUpdate(user._id, { bio }, setBioShow));
    }


    const handleCatShow = (e) => {
        e.preventDefault();
        setCatShow(!catShow);
    }
    const handleJobShow = () => {
        setJobShow(!jobShow);
    }


    const handleUpdateCat = () => {
        dispatch(profileUpdate(user._id, { category: cat }, setCatShow));
    }




    const handleWorkSave = () => {
        dispatch(profileUpdate(user._id, { work: [...user.work, { company, position }] }, setJobShow));
        setPosition("");
        setCompany("");
    }


    const handleWorkDel = (company) => {
        const finalWork = user.work.filter(data => data.company !== company)
        dispatch(profileUpdate(user._id, { work: finalWork }, setJobShow));
    }



    const handleEduSchoolSave = () => {
        dispatch(profileUpdate(user._id, { edu: [...user.edu, { school }] }, setEduShow));
        setSchool("")
    }
    const handleEduCollegeSave = () => {
        dispatch(profileUpdate(user._id, { edu: [...user.edu, { college }] }, setEduShow));
        setCollege("");
    }


    const handleEduSchoolDel = (institute) => {
        const finalEdu = user.edu.filter(data => data.school !== institute)
        dispatch(profileUpdate(user._id, { edu: finalEdu }, setEduShow));
    }

    const handleEduCollegeDel = (institute) => {
        const finalEdu = user.edu.filter(data => data.college !== institute)
        dispatch(profileUpdate(user._id, { edu: finalEdu }, setEduShow));
    }



    // socail 
    const [socail, setSocail] = useState(null);
    const handleSocailSave = () => {
        dispatch(profileUpdate(user._id, { socail: [...user.socail, { socail }] }, setJobShow));
        setPosition("");
        setCompany("");
    }


    const handleSocailDel = (socail) => {
        const finalSocail = user.socail.filter(data => data.company !== socail)
        dispatch(profileUpdate(user._id, { socail: finalSocail }, setJobShow));
    }


    const handleUploadBack = () => {
        setAddFeaturedShow(true);
        setuploadFeaturedShow(false);
        setFeaturedPreview([])
        setFeaturedPhoto([])
    }


    const handleFeaturedPhotoUploads = (e) => {
        let prevImage = [];
        let featurdPhoto = [];
        for (let index = 0; index < e.target.files.length; index++) {
            const image = URL.createObjectURL(e.target.files[index]);
            prevImage.push(image)
            featurdPhoto.push(e.target.files[index])
        }
        setFeaturedPhoto((prevState) => ([...prevState, ...featurdPhoto]));
        setFeaturedPreview((prevState) => ([
            ...prevState, ...prevImage
        ]));
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
                                    <button onClick={handleBioUpdate} className={`${saveBtn && remain > 0 && "save-btn"}`} disabled={!saveBtn ? true : false} >Save</button>
                                </div>
                            </div>
                        </div>}




                    </div>
                    <div className="personail-details">
                        <ul>
                            {user.category && <li>
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/4PEEs7qlhJk.png" alt="" />
                                <span> <span className="bold-text">Profile</span> - {user.category}</span>
                            </li>}

                            {user.work &&

                                user.work.map((data, i) =>
                                    <li key={i}>
                                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/Q9Qu4uLgzdm.png?_nc_eui2=AeFdJ0HlPIzlyMknSfScRrn5QE0O-ZdJm-NATQ75l0mb4-Q2M_FlPnXsc4uVnEQoDfv0yNoErKR7l8qpJtj2iioL " alt="" />
                                        <span>{data.position} at  <span className="bold-text">{data.company}</span></span>
                                    </li>
                                )
                            }


                            {
                                user.edu?.map((data, i) =>
                                    <li key={i}>
                                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png?_nc_eui2=AeHiEfVg0GAKCAOWnl7JyzaOC7xezJFSLOkLvF7MkVIs6RxQJycIuQ-JMwraGhfo1TWsIqwyPaijkFaqu119vcBj" alt="" />
                                        <span>Studied at <span className="bold-text">{data?.school}</span></span>
                                    </li>
                                )

                            }

                            {user.home_town && <li>
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png?_nc_eui2=AeHiEfVg0GAKCAOWnl7JyzaOC7xezJFSLOkLvF7MkVIs6RxQJycIuQ-JMwraGhfo1TWsIqwyPaijkFaqu119vcBj" alt="" />
                                <span>Lives in <span className="bold-text">{user.home_town}</span></span>
                            </li>}

                            {user.living && <li>
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/-e1Al38ZrZL.png?_nc_eui2=AeFm9rLjLQKnoFo3jHm5bOPLyuB9xaeJwC_K4H3Fp4nAL5vmsvA1DmgA2fA9F7xB1v1gyqTNysrUs225zt0ZzlSc" alt="" />
                                <span>From <span className="bold-text">{user.living}</span></span>
                            </li>}


                            {user.relationship && <li>
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/S0aTxIHuoYO.png?_nc_eui2=AeE9pH04Cpot7IW1lywmUZ2HrlG3yvH4CWGuUbfK8fgJYeWXnsUqJY6CAr8B2lDgzOpsRMAXBYky0JpiOm0-6pOt" alt="" />
                                <span>{user.relationship}</span>
                            </li>
                            }

                            {user.socail?.map((data, i) =>

                                <li>
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/BQdeC67wT9z.png?_nc_eui2=AeFTPsXUG1ZQumUkWdQYJ-DIC-BjLWjhL2AL4GMtaOEvYI6BP3QMKIeTu6tq_qsFyMnmPCEDMFQBAZxZKJ5ukQOQ" alt="" />
                                    <span><a href="/me" target="_blank" style={{ color: "#3c44d6" }}>developermahir.com</a></span>
                                </li>

                            )}

                        </ul>


                        {editDetails && <FbModal
                            title="Edit Details"
                            closepopup={setEditDetails}
                        >

                            <div className="profile-modal-body">
                                <div className="modal-header">
                                    <span className="header-title">
                                        Customize your Intro
                                    </span>
                                    <span className="header-subtitle">Details you select will be public.
                                    </span>
                                </div>
                                <div className="profile-intro">



                                    <div className="profile-intro-item">
                                        <span className="intro-title">Category</span>
                                        {!catShow && !user.category &&
                                            <a href="#" onClick={handleCatShow}>

                                                <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png" alt="" />
                                                <span className="intro-name">Add a category</span>
                                            </a>
                                        }


                                        {user.category && !catShow &&
                                            <div className='profile-intro-data'>
                                                <div className='profile-intro-details'><img style={{ filter: "contrast(0.01)" }} src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/4PEEs7qlhJk.png " alt="" /><span> <span>Profile .</span> {user.category}</span></div>
                                                <button onClick={() => setCatShow(!catShow)} className="profile-intro-edit">
                                                    <span style={{ background: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/u0CglVMMI62.png")' }}></span>
                                                </button>

                                            </div>


                                        }



                                    </div>



                                    {catShow &&
                                        <ClickUpdate
                                            hide={setCatShow}
                                            data={{
                                                data: cat,
                                                setData: setCat,
                                                placeholder: "Set your profile category"

                                            }}
                                            save={handleUpdateCat}

                                        />
                                    }




                                    <div className="profile-intro-item">

                                        <span className="intro-title">Work</span>
                                        {!jobShow && user.work.length == 0 && <a href="#" onClick={() => handleJobShow()}>

                                            <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png" alt="" />
                                            <span className="intro-name">Add a workplace</span>
                                        </a>
                                        }

                                        {
                                            user.work.length > 0 && <>{
                                                user.work.map((data, i) => {
                                                    return (<div className='profile-intro-data'>
                                                        <div className='profile-intro-details'><img style={{ filter: "contrast(0.01)" }} src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/4PEEs7qlhJk.png " alt="" />
                                                            <span> {data.position} at {data.company}</span></div>
                                                        <button onClick={() => handleWorkDel(data.company)} className="profile-intro-edit">
                                                            <span className='del-btn-icon' style={{ background: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/u0CglVMMI62.png")' }}></span>
                                                        </button>
                                                    </div>
                                                    )
                                                })
                                            }


                                                <a href="#" onClick={() => handleJobShow()}>
                                                    <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png" alt="" />
                                                    <span className="intro-name">Add a workplace</span>
                                                </a>


                                            </>
                                        }

                                        {jobShow &&
                                            <ClickUpdate
                                                hide={setJobShow}
                                                data={{
                                                    data: company,
                                                    setData: setCompany,
                                                    placeholder: "Set company name"
                                                }}
                                                data2={{
                                                    data: position,
                                                    setData: setPosition,
                                                    placeholder: "Set position name"
                                                }}
                                                save={handleWorkSave}
                                            />
                                        }

                                    </div>



                                    <div className="profile-intro-item">
                                        <span className="intro-title">Education</span>

                                        {user.edu.map((data, i) =>

                                            <>
                                                {data.school && <div className='profile-intro-data'>
                                                    <div className='profile-intro-details'><img style={{ filter: "contrast(0.01)" }} src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/4PEEs7qlhJk.png " alt="" />
                                                        <span> {data.school}</span></div>
                                                    <button onClick={() => handleEduSchoolDel(data.school)} className="profile-intro-edit">
                                                        <span className='del-btn-icon' style={{ background: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/u0CglVMMI62.png")' }}></span>
                                                    </button>
                                                </div>
                                                }


                                                {data.college &&
                                                    <div className='profile-intro-data'>
                                                        <div className='profile-intro-details'>
                                                            <img style={{ filter: "contrast(0.01)" }} src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/4PEEs7qlhJk.png " alt="" />
                                                            <span> {data.college}</span>
                                                        </div>
                                                        <button onClick={() => handleEduCollegeDel(data.college)} className="profile-intro-edit">
                                                            <span className='del-btn-icon' style={{ background: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/u0CglVMMI62.png")' }}></span>
                                                        </button>
                                                    </div>
                                                }
                                            </>
                                        )}


                                        {modalShow.type != "school" && <a href="#" onClick={(e) => handleClickModalShow(e, "school")} >

                                            <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png" alt="" />
                                            <span className="intro-name">Add high school</span>
                                        </a>
                                        }




                                        {modalShow.type === "school" &&
                                            <ClickUpdate
                                                hide={setEduShow}
                                                data={{
                                                    data: school,
                                                    setData: setSchool,
                                                    placeholder: "Set shcool name"
                                                }}
                                                save={handleEduSchoolSave}
                                            />
                                        }



                                        {modalShow.type != "college" && <a href="#" onClick={(e) => handleClickModalShow(e, "college")} >

                                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png?_nc_eui2=AeHiEfVg0GAKCAOWnl7JyzaOC7xezJFSLOkLvF7MkVIs6RxQJycIuQ-JMwraGhfo1TWsIqwyPaijkFaqu119vcBj" alt="" />
                                            <span className="intro-name">Add college</span>
                                        </a>}

                                        {eduShow.type === "college" &&
                                            <ClickUpdate
                                                hide={setEduShow}
                                                data={{
                                                    data: college,
                                                    setData: setCollege,
                                                    placeholder: "Set College name"
                                                }}

                                                save={handleEduCollegeSave}
                                            />
                                        }
                                    </div>


                                    <div className="profile-intro-item">
                                        <span className="intro-title">Current town city</span>
                                        {!user.living && <a href="#" onClick={(e) => handleClickModalShow(e, "current_town")} >
                                            <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png" alt="" />
                                            <span className="intro-name">Add town</span>
                                        </a>}

                                        {user.living && <div className='profile-intro-data'>
                                            <div className='profile-intro-details'>
                                                <img style={{ filter: "contrast(0.01)" }} src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/4PEEs7qlhJk.png " alt="" />
                                                <span> {user.living}</span>
                                            </div>
                                            <button onClick={() => handleCurrentTownDelete(user.living)} className="profile-intro-edit">
                                                <span className='del-btn-icon' style={{ background: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/u0CglVMMI62.png")' }}></span>
                                            </button>
                                        </div>}



                                        {modalShow.type === "current_town" &&
                                            <ClickUpdate
                                                hide={setModalShow}
                                                data={{
                                                    data: current_town,
                                                    setData: setCurrent_town,
                                                    placeholder: "Current town"
                                                }}
                                                save={handleCurrentTownSave}
                                            />
                                        }
                                    </div>



                                    <div className="profile-intro-item">
                                        <span className="intro-title">Home town</span>
                                        {!user.home_town && <a href="#" onClick={(e) => handleClickModalShow(e, "home_town")} >
                                            <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png" alt="" />
                                            <span className="intro-name">Add home town</span>
                                        </a>}

                                        {user.home_town && <div className='profile-intro-data'>
                                            <div className='profile-intro-details'>
                                                <img style={{ filter: "contrast(0.01)" }} src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/4PEEs7qlhJk.png " alt="" />
                                                <span> {user.home_town}</span>
                                            </div>
                                            <button onClick={() => handleHomeTownDelete(user.home_town)} className="profile-intro-edit">
                                                <span className='del-btn-icon' style={{ background: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/u0CglVMMI62.png")' }}></span>
                                            </button>
                                        </div>}


                                        {modalShow.type === "home_town" &&
                                            <ClickUpdate
                                                hide={setModalShow}
                                                data={{
                                                    data: home_town,
                                                    setData: setHome_town,
                                                    placeholder: "Home town"
                                                }}
                                                save={handleHomeTownSave}
                                            />
                                        }
                                    </div>



                                    <div className="profile-intro-item">
                                        <span className="intro-title">Relationship</span>
                                        {
                                            !user.relationship &&
                                            <a href="#" onClick={(e) => handleClickModalShow(e, "relationship")} >

                                                <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png" alt="" />
                                                <span className="intro-name">Add relationship status</span>
                                            </a>}

                                        {user.relationship && <div className='profile-intro-data'>
                                            <div className='profile-intro-details'>
                                                <img style={{ filter: "contrast(0.01)" }} src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/4PEEs7qlhJk.png " alt="" />
                                                <span> {user.relationship}</span>
                                            </div>
                                            <button onClick={() => handleRelationshipDelete(user.relationship)} className="profile-intro-edit">
                                                <span className='del-btn-icon' style={{ background: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/u0CglVMMI62.png")' }}></span>
                                            </button>
                                        </div>}



                                        {modalShow.type === "relationship" &&
                                            <ClickUpdate
                                                hide={setModalShow}
                                                data={{
                                                    data: relationship,
                                                    setData: setRelationship,
                                                    placeholder: "Add Relationship status"
                                                }}
                                                save={() => handleRelationshipSave()}
                                            />
                                        }






                                    </div>

                                </div>

                            </div>

                            <div className="profile-modal-footer ">
                                <span className="update-info">Update Your Information</span>
                                <div className='update-btns'>
                                    <button onClick={() => setEditDetails(!editDetails)}>Cancel</button>
                                    <button>Save</button>
                                </div>
                            </div>

                        </FbModal>}

                        <button onClick={() => setEditDetails(!editDetails)} className="personal-info-button">Edit Details</button>
                    </div>


                    {/* Add hobbies section  */}
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


                    {/* Add featured section  */}
                    <div className="profile-featured">
                        <div className="profile-featured-gallery">
                            <div onClick={() => setFeaturedShow(true)} className="profile-featured-item">
                                <div style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dirili%C5%9F_Ertu%C4%9Frul_S1.jpg/220px-Dirili%C5%9F_Ertu%C4%9Frul_S1.jpg')` }} className="profile-featured-photo">
                                </div>
                                <span className="featured-count">+35</span>
                            </div>
                        </div>

                        {feturedShow && <PopupFullWidth
                            hide={setFeaturedShow} >
                            <StorySlider hide={setFeaturedShow} />
                        </PopupFullWidth>
                        }


                        {addFeturedShow && (
                            <>
                                <div className="add-featured-modal">
                                    <FbModal title="Edit Featured"
                                        closepopup={setAddFeaturedShow}

                                    >
                                        <div className="add-fearured-banner">
                                            <img src={featured_banner} alt="" />
                                            <p>Feature your favorite photos and stories here for all your friends to see.</p>
                                            <button onClick={() => setuploadFeaturedShow(true)}>Add new </button>
                                        </div>
                                    </FbModal>
                                </div>
                                {
                                    uploadFeturedShow && <FbModal title="Edit featured collection"
                                        closepopup={setuploadFeaturedShow}
                                        className=" featured-upload active"
                                        back={handleUploadBack}
                                    >
                                        <div style={{ minHeight: "400px" }} className="active add-fearured-upload">
                                            <p>This includes any active stories and your story archive.</p>
                                            <label htmlFor="file">
                                                Upload photos
                                            </label>
                                            <input multiple onChange={handleFeaturedPhotoUploads} type="file" id='file' style={{ display: "none" }} />
                                            <div className="featured-preview">

                                                {featuredPreview?.map((item, i) =>
                                                    <>
                                                        <div key={i} className="preview-item">
                                                            <label htmlFor={`checkbox-${i}`}>
                                                                <img src={item} alt="" />
                                                            </label>
                                                            <div className="container">
                                                                <div className="round">
                                                                    <input type="checkbox" id={`checkbox-${i}`} />
                                                                    <label htmlFor="checkbox">   </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </FbModal>
                                }
                            </>
                        )
                        }





                        <button onClick={() => setAddFeaturedShow(true)} className="personal-info-button">Add  Featured</button>



                    </div>


                </div>
            </FbCard>
        </>
    )
}

export default ProfileInro;