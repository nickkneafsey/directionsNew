import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux'
import AgeMenu from './components/AgeMenu';
import TopicMenu from './components/TopicMenu';
import Game from './components/Game';

const RouterComponent = () => (
  <Router
    sceneStyle={{ paddingTop: 65 }}
    navigationBarStyle={styles.navBar}
    titleStyle={styles.navBarTitle}
    barButtonTextStyle={styles.barButtonTextStyle}
    barButtonIconStyle={styles.barButtonIconStyle}>
    <Scene key="main">
      <Scene
        key="ageMenu"
        component={AgeMenu}
        title="Select An Age Group"
        initial
      />

      <Scene
      key="topicMenu"
      component={TopicMenu}
      title="Topic"
      />

      <Scene
        key="game"
        component={Game}
        title="Game"
      />

    </Scene>
  </Router>
);

const styles = {
  navBar: {
    backgroundColor:'#202020',
  },
  navBarTitle:{
    color:'white'
  },
  barButtonTextStyle:{
    color:'white'
  },
  barButtonIconStyle:{
    tintColor:'white'
  }
}


export default RouterComponent;
