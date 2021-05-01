import React from 'react';
import './Header.css'
import img from '../../images/myPic.jpg'

const Header = () => {
    return (
        <div className="row main-container header">
            <div className="col-md-6 p-5">
                <h1 className="intro">Hi,<br/> i'm <span className="hightlight">S</span>afiqul,<br/> web developer</h1>
                <p className="intro-details">MERN stack web developer</p>
                <a href="https://drive.google.com/uc?export=download&id=17IK_1oRnQO_Yo8oRA3oORuYYiML_SGSn"><button className="intro-btn">Get Resume</button></a>
            </div>
            <div className="col-md-6">
                {/* <img className="img-fluid rounded-circle m-auto d-block" style={{padding:'10%'}} src={img} alt=""/> */}
            </div>
        </div>
    );
};

export default Header;