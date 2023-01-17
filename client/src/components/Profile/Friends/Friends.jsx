import React from 'react';
import FbCard from "../../FbCard/FbCard";

const Friends = () => {
    return (
        <FbCard>
            <div className="profile-friends">

                <div className="profile-header">
                    <h3>Friends</h3>
                    <a href="">See all friends</a>
                </div>
                <span className="friends-count ">430 friends</span>
            </div>

            <div className="profile-friends-item">


                <a href="">
                    <div className="friends-card">
                        <div className="card-image">
                            <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                        </div>
                        <h3 className="friends-name">
                            Junaid Aman
                        </h3>
                    </div>
                </a>



                <a href="">
                    <div className="friends-card">
                        <div className="card-image">
                            <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                        </div>
                        <h3 className="friends-name">
                            Junaid Aman
                        </h3>
                    </div>
                </a>
                <a href="">
                    <div className="friends-card">
                        <div className="card-image">
                            <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                        </div>
                        <h3 className="friends-name">
                            Junaid Aman
                        </h3>
                    </div>
                </a>
                <a href="">
                    <div className="friends-card">
                        <div className="card-image">
                            <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                        </div>
                        <h3 className="friends-name">
                            Junaid Aman
                        </h3>
                    </div>
                </a>
                <a href="">
                    <div className="friends-card">
                        <div className="card-image">
                            <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                        </div>
                        <h3 className="friends-name">
                            Junaid Aman Junu
                        </h3>
                    </div>
                </a>
                <a href="">
                    <div className="friends-card">
                        <div className="card-image">
                            <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                        </div>
                        <h3 className="friends-name">
                            Junaid Aman Junu
                        </h3>
                    </div>
                </a>

            </div>

        </FbCard>
    )
}

export default Friends