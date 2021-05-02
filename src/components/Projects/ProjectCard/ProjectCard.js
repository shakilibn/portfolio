import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    const { id, name, img } = project;
    return (
        <div className="col-md-6 col-lg-4 my-4">

            <Card className="project-card" style={{ width: '18rem', overflow: 'hidden' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body style={{ backgroundColor: '#CACACA', color: '#303030', zIndex: '1' }}>
                    <Card.Title className="text-center">{name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProjectCard;