import React from 'react';
import { useParams } from 'react-router';
import Eshop from '../../AllProjectsDetails/EShop/Eshop';
import LeagueTracker from '../../AllProjectsDetails/LeagueTracker/LeagueTracker';
import MotoRiders from '../../AllProjectsDetails/MotoRiders/MotoRiders';
import PandaCommerce from '../../AllProjectsDetails/PandaCommerce/PandaCommerce';
import TravelValley from '../../AllProjectsDetails/TravelValley/TravelValley';
import ParticleBackground from '../../ParticleBackground/ParticleBackground';

const ProjectDetails = () => {
    const {id} = useParams();
    return (
        <div>
            {
                (id == 1) ? <TravelValley /> 
                : (id == 2) ? <Eshop />
                : (id == 3) ? <MotoRiders />
                : (id == 4) ? <LeagueTracker />
                : (id == 5) ? <PandaCommerce />
                : null
            }
        </div>
    );
};

export default ProjectDetails;