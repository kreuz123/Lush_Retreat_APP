import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Components */
import Menu from './components/Sidemenu'; // 如果你已經命名為 Menu，保留
import WelcomeScreen from './pages/WelcomeScreen';
import HomeScreen from './pages/HomeScreen';
import BookWithUs from './pages/BookWithUs';
import EuropeanMassage from './pages/EuropeanMassage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Dark mode setup */
// import '@ionic/react/css/palettes/dark.always.css';
// import '@ionic/react/css/palettes/dark.class.css';
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            {/* Welcome Screen Route */}
            <Route exact path="/welcome" component={WelcomeScreen} />
            
            {/* Home Screen */}
            <Route exact path="/home" component={HomeScreen} />
            
            {/* Book With Us */}
            <Route exact path="/book-with-us" component={BookWithUs} />
            
            {/* European Massage */}
            <Route exact path="/european-massage" component={EuropeanMassage} />
            
            {/* Default Redirect */}
            <Redirect exact from="/" to="/welcome" />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
