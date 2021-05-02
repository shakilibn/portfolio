import React from 'react';
import Eshop from '../EShop/Eshop';
import MotoRiders from '../MotoRiders/MotoRiders';
import TravelValley from '../TravelValley/TravelValley';
import PandaCommerce from '../PandaCommerce/PandaCommerce';
import LeagueTracker from '../LeagueTracker/LeagueTracker';
import ParticleBackground from '../../ParticleBackground/ParticleBackground';

const Projects = () => {
    return (
        <div>
            <ParticleBackground />
            <TravelValley />
            <Eshop />
            <MotoRiders />
            <LeagueTracker />
            <PandaCommerce />
        </div>
    );
};

export default Projects;