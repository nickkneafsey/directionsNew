import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux'
import AgeMenu from './components/AgeMenu';
import TopicMenu from './components/TopicMenu';
import Game from './components/Game';

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="main">
      <Scene
        key="game"
        component={Game}
        title="Game"
      />

      <Scene
        key="ageMenu"
        component={AgeMenu}
        title="Select An Age Group"
      />

      <Scene
        key="topicMenu"
        component={TopicMenu}
        title="Topic"
      />


    </Scene>

  </Router>
);

export default RouterComponent;
