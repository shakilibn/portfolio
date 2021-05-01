import React from 'react';
import img from '../../../images/e-shop.png';

const Eshop = () => {
    return (
        <div className="main-container p-4">
            <h3>E-Shop</h3>
            <div className="row my-4">
                <div className="col-md-6">
                    <img className="img-fluid rounded" src={img} alt="" style={{ height: '300px' }} />
                </div>
                <div className="col-md-6 link">
                    <ul className="mt-4">
                        <li>
                            Admin has a Dashboard where admin can add and delete product from stores. Admin can check orders from
                            users.
                        </li>
                        <li>
                            A user can orders various products from this application(login required). and check their all orders log with
                            date from orders.
                        </li>
                        <li>
                            Developed this application using React, React router, firebase, node, mongodb, javascript, HTML, CSS
                        </li>
                    </ul>
                    <ul className="technologies">
                    <li>React.js</li>
                    <li>React Router</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Firebase</li>
                    <li>Bootstrap5</li>
                </ul>
                    <p className="d-inline mr-2" style={{ fontSize: '20px' }}>Links : </p>
                    <a href="https://full-stack-e-shop.web.app/" target="_blank">Live site</a>
                    <a className="mx-5" href="https://github.com/shakilibn/E-shop-client" target="_blank">Github Client side</a>
                    <a href="https://github.com/shakilibn/E-shop-server" target="_blank">Github server side</a>
                </div>
            </div>
            <hr/>
        </div>
    
    );
};

export default Eshop;