import React from 'react';
import './PandaCommerce.css';
import panda from '../../../images/panda.PNG';
import panda2 from '../../../images/panda2.PNG';

const PandaCommerce = () => {
    return (
        <div className='main-container p-4'>
            <h3>Panda commerce</h3>
            <div className="d-flex justify-content-center">
                <div>
                    <img className="d-inline my-3 mr-5 img-fluid rounded" src={panda} alt="" style={{ height: '300px' }} />
                    <img className="img-fluid rounded" src={panda2} alt="" style={{ height: '300px' }} />
                </div>
            </div>
            <div className="p-4 link">
                <ul>
                    <li>
                        A fully Responsive front end design of a e commerce site.
                    </li>
                </ul>
                <ul className="technologies">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap5</li>
                </ul>
                <p className="d-inline mr-2" style={{ fontSize: '20px' }}>Links : </p>
                <a href="https://shakilibn.github.io/panda-commerce-bootstrap/" target="_blank">Live site</a>
                <a className="mx-5" href="https://github.com/shakilibn/panda-commerce-bootstrap" target="_blank">Github Client side</a>
                <hr />
            </div>
        </div>
    );
};

export default PandaCommerce;