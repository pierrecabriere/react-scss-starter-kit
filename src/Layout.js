import React from 'react';

import Navbar from 'components/Navbar';

import './styles.scss';

export default opts => {
  const Layout = Component => class extends React.Component {
    render() {
      return (
        <main>
          <Navbar />
          <Component {...this.props} />
        </main>
      )
    }
  }

  // make parameters
  if (typeof opts === 'function') {
    return Layout(opts);
  }

  return Component => Layout(Component);
}
