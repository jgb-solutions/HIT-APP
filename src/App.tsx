import React from 'react'
import { IonApp, IonRouterOutlet, IonSplitPane, isPlatform } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Route, Redirect } from 'react-router-dom'
// import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free'
// import { AdMob } from "@ionic-native/admob-plus"

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import FourOrFour from './pages/FourOrFour'
import Menu from './components/Menu'
import AllNews from './pages/AllNews'
import SingleNews from './pages/SingleNews'
import About from './pages/About'

const App: React.FC = () => {
  // const bannerConfig: AdMobFreeBannerConfig = {
  //   // add your config here
  //   // for the sake of this example we will just use the test config
  //   //id: "ca-app-pub-3793163111580068~5741556623",
  //   isTesting: true,
  //   autoShow: true
  // }

  // AdMobFree.banner.config(bannerConfig)
  // AdMobFree.banner.prepare()
  //   .catch(e => console.log(e))
  // if (isPlatform('android')) {
  //   AdMob.banner.show({
  //     id: 'ca-app-pub-3793163111580068~5741556623',
  //   })
  // }

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" render={() => <AllNews />} exact={true} />
            <Route path="/about" render={() => <About />} exact={true} />
            <Route path="/404" render={() => <FourOrFour />} exact={true} />
            <Route path="/n/:newsHash" render={props => <SingleNews {...props} />} />
            <Redirect to="/404" />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
