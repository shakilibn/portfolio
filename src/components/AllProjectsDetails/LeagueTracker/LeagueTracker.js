import React from 'react';
import img from '../../../images/league_tracker.PNG';
import img2 from '../../../images/league_tracker2.PNG';

const LeagueTracker = () => {
    return (
        <div className='main-container p-4'>
            <h3>League Tracker</h3>
            <div className="d-flex justify-content-center">
                <div>
                    <img className="d-inline my-3 mr-5 img-fluid rounded" src={img} alt="" style={{ height: '300px' }} />
                    <img className="img-fluid rounded" src={img2} alt="" style={{ height: '300px' }} />
                </div>
            </div>
            <div className="p-4 link">
                <ul>
                    <li>
                        Explore League tracker, a responsive front end design. This site developed using api.
                    </li>
                </ul>
                <ul className="technologies">
                    <li>React</li>
                    <li>React Router</li>
                    <li>API</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap5</li>
                </ul>
                <p className="d-inline mr-2" style={{ fontSize: '20px' }}>Links : </p>
                <a href="https://boring-joliot-32b45a.netlify.app/" target="_blank">Live site</a>
                <a className="mx-5" href="https://github.com/Porgramming-Hero-web-course/react-router-shakilibn" target="_blank">Github Client side</a>
                <hr />
            </div>
        </div>
    );
};

export default LeagueTracker;