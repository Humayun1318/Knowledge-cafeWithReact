import React from 'react';
import './Header.css'
import profile from "../../image/profile.png"
const Header = () => {
    return (
        <div className='header-container'>
            <nav className='header'>
                <div>
                    <h2 className='header-logo'>Knowledge Cafe</h2>
                </div>
                <a href=""><img className='profile-image' src={profile} alt="Images Of profile" /></a>
            </nav>
            <hr />
       </div>
    );
};

export default Header;