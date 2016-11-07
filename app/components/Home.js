import React from 'react';
import ProjectPreview from './ProjectPreview';
import projects from '../projects';

export default class Home extends React.Component {
    render() {
        let projectPreviews = projects.map((project) => <ProjectPreview key={project.github} name={project.name} description={project.description}/>);

        return (
            <div>
              <ul>{projectPreviews}</ul>
            </div>
        )
    }
}
