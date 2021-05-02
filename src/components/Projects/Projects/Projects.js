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
        img: travelValley,
        live:"https://travel-valley.web.app/",
        github: "https://github.com/shakilibn/Travel-valley"
    }, {
        id: 2,
        name: 'E-Shop',
        img: eShop,
        live: "https://full-stack-e-shop.web.app/",
        github: "https://github.com/shakilibn/E-shop-client"
    }, {
        id: 3,
        name: 'Moto Riders',
        img: motoRiders,
        live: "https://moto-riders-68ceb.web.app/",
        github: "https://github.com/shakilibn/Moto-Riders"
    }, {
        id: 4,
        name: 'League Tracker',
        img: leagueTracker,
        live: "https://boring-joliot-32b45a.netlify.app/",
        github: "https://github.com/Porgramming-Hero-web-course/react-router-shakilibn"
    }, {
        id: 5,
        name: 'Panda Commerce',
        img: pandaCommerce,
        live: "https://shakilibn.github.io/panda-commerce-bootstrap/",
        github: "https://github.com/shakilibn/panda-commerce-bootstrap"
    }, {
        id: 6,
        name: 'Portfolio',
        img: portfolio,
        live: "https://safiqul-1.web.app/",
        github: "https://github.com/shakilibn/portfolio"
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