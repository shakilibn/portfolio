import React from 'react';
import './About.css'
import img from '../../images/myPic.jpg';

const comfortable = ['JavaScript', 'ES6', 'React.js', 'React Router', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'HTML', 'CSS'];
const familiar = ['React native', 'Map API', 'SQL', 'Material Design', 'SASS', 'OOP', 'Data Structuring'];
const others = ['Firebase', 'Netlify', 'Heroku', 'Github', 'VS Code', 'Photoshop', 'Illustrator'];

const About = () => {
    return (
        <div className="main-container">
            <div className="row p-5">
                <div className="col-md-6 p-3">
                    <img className="img-fluid rounded-circle mb-5" src={img} alt="" style={{ height: '200px' }} />
                    <h3 className="mb-3">I am <span className="brand-text">Safiqul Islam</span></h3>
                    <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                </div>
                <div className="col-md-6 p-3">
                    <h3 className="brand-text">My Skills Set</h3>
                    <hr />
                    <h5>Comfortable</h5>
                    <ul className="technologies">
                        {
                            comfortable.map(item => <li>{item}</li>)
                        }
                    </ul>

                    <h5 className="mt-4">Familiar</h5>
                    <ul className="technologies">
                        {
                            familiar.map(item => <li>{item}</li>)
                        }
                    </ul>

                    <h5 className="mt-4">Others</h5>
                    <ul className="technologies">
                        {
                            others.map(item => <li>{item}</li>)
                        }
                    </ul>
                </div>
            </div>
            <p className="text-center">Designed & Developed by <span className="brand-text">Safiqul islam</span></p>
        </div>
    );
};

export default About;