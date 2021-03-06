import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => {

    return (<>
        <NavLink style={{color: '#FB2', padding: '2rem'}} to='/' >
            Home
        </NavLink>

        <NavLink style={{color: '#FB2', padding: '2rem'}} to='/post' >
            Post
        </NavLink>
  
        <NavLink style={{color: '#FB2', padding: '2rem'}} to='/addUser' >
            AddUser
        </NavLink>

        <NavLink style={{color: '#FB2', padding: '2rem'}} to='/about' >
            About
        </NavLink>

    </>)
}

export default Header;