import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { id, name, img, live, github } = project;
    return (
        <div className="col-md-6 col-lg-4 my-4">

            <Card className="project-card" style={{ width: '18rem', overflow: 'hidden' }}>
                <Card.Img variant="top" src={img} />
                <div class="overlay">
                    <div class="text">
                        <Card.Text className="mb-4">{name}</Card.Text>
                        <a href={live} target="_blank"><FontAwesomeIcon className="text-white fa-2x mr-3" icon={faExternalLinkAlt} /></a>
                        <a href={github} target="_blank"><FontAwesomeIcon className="text-white fa-2x mr-3" icon={faGithub} /></a>
                        <Link style={{textDecoration:'none'}} to={`/project/${id}`}><button className="d-block mt-4 project-btn">Details</button></Link>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ProjectCard;