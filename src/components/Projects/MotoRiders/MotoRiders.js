import React from 'react';
import img from '../../../images/moto-riders.png';

const MotoRiders = () => {
    return (
        <div className="main-container p-4">
            <h3>Another Project</h3>
            <div className="row my-4">
                <div className="col-md-6">
                    <img className="img-fluid" src={img} alt="" style={{ height: '300px' }} />
                </div>
                <div className="col-md-6">
                    <h3 className="mb-4">Moto Riders</h3>
                    <ul>
                        <li>
                            Login Authentication implemented using firebase. A user can create new account with email and password
                            or can login using their google or facebook account.
                        </li>
                        <li>
                            User can search a destination according date and it will show a search list according their choice bike, car,
                            bus or metro.
                        </li>
                        <li>
                            Implemented Google map, it can possible show destination route on map by using paid google api key.
                        </li>
                    </ul>
                    <ul className="technologies">
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Firebase</li>
                    <li>Bootstrap5</li>
                </ul>
                    <p className="d-inline mr-2" style={{ fontSize: '20px' }}>Links : </p>
                    <a href="https://moto-riders-68ceb.web.app/" target="_blank">Live site</a>
                    <a className="mx-5" href="https://github.com/shakilibn/Moto-Riders" target="_blank">Github Client side</a>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default MotoRiders;