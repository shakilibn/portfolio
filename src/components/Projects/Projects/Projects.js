import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import travelValley from '../../../images/travel-valley-full-3.png';
import eShop from '../../../images/e-shop-full.png';
import motoRiders from '../../../images/moto-riders-full.png';
import leagueTracker from '../../../images/league-tracker-full.png';
import pandaCommerce from '../../../images/panda-commerce-full.png';
import portfolio from '../../../images/portfolio.png';

const projects = [
    {
        id: 1,
        name: 'Travel Valley',
        img: travelValley
    }, {
        id: 2,
        name: 'E-Shop',
        img: eShop
    }, {
        id: 3,
        name: 'Moto Riders',
        img: motoRiders
    }, {
        id: 4,
        name: 'League Tracker',
        img: leagueTracker
    }, {
        id: 5,
        name: 'Panda Commerce',
        img: pandaCommerce
    }, {
        id: 6,
        name: 'Portfolio',
        img: portfolio
    }
];

const Projects = () => {
    return (
        <div className="container p-5 mb-5">
            <h2 className="brand-text mb-3">Projects</h2>
            <div className="row">
                {
                    projects.map(project => <ProjectCard project={project} />)
                }
            </div>
        </div>
    );
};

export default Projects;