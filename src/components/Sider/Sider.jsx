import React from 'react';
import './Sider.css'

const Sider = () => {
    return (
        <div>
            <div className='side-container-upper'>
                <h2 className='on-read-time'>Spent time on read : { } min</h2>

            </div>
            <div className='side-container-lower'>
                <h1 className='bookmarked-blogs'>Bookmarked Blogs : { }</h1>

                <div className='under-booked-mark-blogs'>
                    

                </div>
            </div>
        </div>
    );
};

export default Sider;