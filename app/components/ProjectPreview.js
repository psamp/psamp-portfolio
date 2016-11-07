import React from 'react'

export default class ProjectPreview extends React.Component {
  render() {
    let name = this.props.name.toLowerCase();
    let linkHref = `/projects/${name}`;
    return (
      <div>
        <h3><a href={linkHref}>{name}</a></h3>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

ProjectPreview.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
};
