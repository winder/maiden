import React, { Component } from 'react';

class ProjectActivity extends Component {
  componentDidMount() {
    this.props.getCatalogSummary(summary => {
      // summary.get('catalogs').map(description => this.props.getCatalog(description.get('name')));
      console.log(summary.toJS());
    });
    this.props.getProjectSummary();
  }

  render() {
    return <div className="project-activity">stuff</div>;
  }
}

export default ProjectActivity;