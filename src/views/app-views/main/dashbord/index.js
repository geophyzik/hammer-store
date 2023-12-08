import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Planner from './Plan';

const SettingContent = ({ match }) => {
  return (
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/dashbord`} />
      <Route path={`${match.url}/dashbord`} component={Planner} />
    </Switch>
  );
};

export class Setting extends Component {
  render() {
    return (
      <div className="inner-app-layout">
        <div className="main-content">
          <SettingContent {...this.props} />
        </div>
      </div>
    );
  }
}

export default Setting;

