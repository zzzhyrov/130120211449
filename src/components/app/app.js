import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Page from '../page';

class App extends PureComponent {
  render() {
    const { managers } = this.props;
    const activeManagerProfileId = Object.values(managers)[0].id;

    return (
      <div>
        <Page id={activeManagerProfileId} />
      </div>
    );
  }
}

export default connect((state) => ({
  managers: state.managers,
}))(App);
