import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux'
import AgeMenu from './components/AgeMenu';
import TopicMenu from './components/TopicMenu';
import Game from './components/Game';
import Splash from './components/Splash';

const RouterComponent = () => (
  <Router
    sceneStyle={{ paddingTop: 65 }}
    navigationBarStyle={styles.navBar}
    titleStyle={styles.navBarTitle}
    barButtonTextStyle={styles.barButtonTextStyle}
    barButtonIconStyle={styles.barButtonIconStyle}
    hideNavBar={false}>

    <Scene key="main">
      <Scene
        sceneStyle={{ paddingTop: 0 }}
        key="splash"
        component={Splash}
        hideNavBar={true}
        initial
      />

      <Scene
        key="ageMenu"
        component={AgeMenu}
        title="Select An Age Group"
      />

      <Scene
        key="topicMenu"
        component={TopicMenu}
        title="Select a Topic"
      />

      <Scene
        key="game"
        component={Game}
        title="TapAlong"
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
