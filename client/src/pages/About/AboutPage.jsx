import React from "react";
import { Link, Outlet } from "react-router-dom";


const AboutPage = () => {
    return <>
        <div class="fb-profile-body">
            <div className="fb-body-wrapper">
                <div className="about-section-wrapper">
                    <div className="about_menu">
                        <h3>About</h3>
                        <Link className="active" to="/profile/about_overflow">Overflow</Link>
                        <Link to="/profile/">Work and education</Link>
                        <Link to="/profile/">Places lived</Link>
                        <Link to="/profile/">Contact and basic info</Link>
                        <Link to="/profile/">Privacy and Legal info</Link>
                        <Link to="/profile/about_profile_transparency">Profile transparency</Link>
                        <Link to="/profile/">Family and relationships</Link>
                        <Link to="/profile/">Life events</Link>
                    </div>
                    <div className="about-content">
                        <Outlet/>
                    </div>
                </div>

            </div>
        </div>
    </>;
};

export default AboutPage;
