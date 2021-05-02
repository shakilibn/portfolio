import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer-container p-5 mt-5">
            <div className="text-center text-white">
                <div className="row">
                    <div className="col-md-3">
                        <h6 className="pl-5 mb-3 text-decoration-underline brand-text">Skills</h6>
                        <ul>
                            <li>React</li>
                            <li>React Router</li>
                            <li>Javascript Es6</li>
                            <li>Node</li>
                            <li>MongoDb</li>
                            <li>HTML, CSS, Bootstrap</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6 className="pl-5 mb-3 text-decoration-underline brand-text">Projects</h6>
                        <ul>
                            <li>Travel Valley</li>
                            <li>E-Shop</li>
                            <li>Moto Riders</li>
                            <li>League Tracker</li>
                            <li>Doctors Portal</li>
                            <li>Panda commerce</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6 className="pl-5 mb-3 text-decoration-underline brand-text">Information</h6>
                        <ul>
                            <li>Miles</li>
                            <li>About me</li>
                            <li>Online Query</li>
                            <li>Hire me</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6 className="pl-4 mb-3 text-decoration-underline brand-text">Address & Contact</h6>
                        <ul>
                            <li>Dhaka, Bangladesh</li>
                        </ul>
                        <a href="https://github.com/shakilibn" target="_blank"><FontAwesomeIcon className="text-white fa-2x mr-3" icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/in/safiqul-islam-shakil-bab781210/" target="_blank"><FontAwesomeIcon className="text-white fa-2x" icon={faLinkedin} /></a>
                        <div className="mt-4">
                            <a href="https://drive.google.com/uc?export=download&id=17IK_1oRnQO_Yo8oRA3oORuYYiML_SGSn">
                                <button className="intro-btn"><FontAwesomeIcon className="text-white mr-3" icon={faDownload} />Get Resume</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;