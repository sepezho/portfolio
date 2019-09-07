import React from 'react';
import Header_mp4 from '../static/Header_mp4.mp4';
import Title_header from './Title_header.jsx';

const Header = () => {
  return (
    <div className='header' >
    	<video src={Header_mp4} type='video/mp4' autoPlay loop muted/>
    	<Title_header />
    </div>
  );
}

export default Header;