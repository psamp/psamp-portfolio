import React from 'react';
import ProjectPreview from './ProjectPreview';
import Intro from './Intro';
import styles from '../styles/home.scss';
import projects from '../projects';

export default class Home extends React.Component {
    render() {
        let projectPreviews = projects.map((project) => <ProjectPreview key={project.github} name={project.name} description={project.description}/>);

        return (
            <div className='projects'>
              <Intro />
              <div className='project'><ul>{projectPreviews}</ul></div>
            </div>
        )
    }
}
