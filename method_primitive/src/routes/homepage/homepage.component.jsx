import React, { Profiler } from 'react';

// Profiler -> tells us how long the components are talking to mount on a page
// it has id -> so that when you log out this information, you know which profiler is logging, which information.
// second is a function and the first three parameters are important so to check the remaining parameters see the doc below
// https://reactjs.org/docs/profiler.html#usage

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

class HomePage extends React.Component {
  render() {
    return (
      <HomePageContainer>
        <Profiler
          id="Directory"
          onRender={(id, phase, actualDuration) => {
            console.log({
              id,
              phase,
              actualDuration,
            });
          }}
        >
          <Directory />
        </Profiler>
      </HomePageContainer>
    );
  }
}

export default HomePage;
