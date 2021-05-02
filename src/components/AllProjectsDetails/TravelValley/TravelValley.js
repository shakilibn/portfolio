import React from 'react';
import './TravelValley.css';
import travelValley from '../../../images/travel-valley.PNG';
import travelValley2 from '../../../images/travel-valley-2.PNG';
import ParticleBackground from '../../ParticleBackground/ParticleBackground';

const TravelValley = () => {
    return (
        <div className='main-container p-4'>
            <h1 style={{ color: '#05FDD8' }}>Some of my works</h1><hr />
            <h3>Travel Valley</h3>
            <div className="d-flex justify-content-center">
                <div>
                    <img className="d-inline my-3 mr-5 img-fluid rounded" src={travelValley} alt="" style={{ height: '300px' }} />
                    <img className="img-fluid rounded" src={travelValley2} alt="" style={{ height: '300px' }} />
                </div>
            </div>
            <div className="p-4 link">
                <ul>
                    <li>
                        User can login with google account implemented using firebase authentication. user can book different
                        travel packages. Users can check their all bookings and booking status(pending / on going / done).
                        And a user can give review about management.
                    </li>
                    <li>
                        An admin can manage this application. There is a dashboard for Admin. Admin can make admin other
                        people by email. Admin can add and delete services, destinations, travel guide. admin can checks all
                        bookings from users and can change the status of bookings (pending / onGoing / done).
                    </li>
                    <li>
                        Implemented payment Gatewaty using Stripe
                    </li>
                </ul>
                <ul className="technologies">
                    <li>React.js</li>
                    <li>React Router</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Stripe</li>
                    <li>Firebase</li>
                    <li>Bootstrap5</li>
                </ul>
                <p className="d-inline mr-2" style={{fontSize:'20px'}}>Links : </p>
                <a href="https://travel-valley.web.app/" target="_blank">Live site</a>
                <a className="mx-5" href="https://github.com/shakilibn/Travel-valley" target="_blank">Github Client side</a>
                <a href="https://github.com/shakilibn/Travel-valley-server" target="_blank">Github server side</a>
                <hr/>
            </div>
        </div>
    );
};

export default TravelValley;