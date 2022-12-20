import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import Details from './pages/Details';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/myappcss/App.css';
import ListeAvion from './pages/ListeAvion';
import ListeAssurance from './pages/ListeAssurance';
import ListeExpire3 from './pages/ListeExpire3';
import Menu from './components/Menu';
import MenuHeader from './components/MenuHeader';
import ExpireDans1Mois from './pages/ExpireDans1Mois';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login">
          <Menu />
          <IonPage id="main-content">
            <MenuHeader />
            <Login />
            <Footer />
          </IonPage>
        </Route>
        <Route path="/listeAvion">
          <Menu />
          <IonPage id="main-content">
            <MenuHeader />
            <ListeAvion/>
            <Footer />
          </IonPage>
        </Route>
        <Route path="/" exact>
          <Menu />
          <IonPage id="main-content">
            <MenuHeader />
            <ListeAvion/>
            <Footer />
          </IonPage>
        </Route>
        <Route path="/details">
          <Menu />
          <IonPage id="main-content">
            <MenuHeader />
            <Details/>
            <Footer />
          </IonPage>
        </Route>
        <Route path="/listeAssurance">
          <Menu />
          <IonPage id="main-content">
            <MenuHeader />
            <ListeAssurance/>
            <Footer />
          </IonPage>
        </Route>
        <Route path="/listeAssurance2">
          <Menu />
          <IonPage id="main-content">
            <MenuHeader />
            <ListeExpire3/>
            <Footer />
          </IonPage>
        </Route>
         <Route path="/1mois">
          <Menu />
          <IonPage id="main-content">
            
            <ExpireDans1Mois/>
            
          </IonPage>
        </Route> 
        
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);
export default App;
