import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import {
  homeOutline,
  homeSharp,
  bookOutline,
  bookSharp,
  logOutOutline,
  logOutSharp,
} from 'ionicons/icons';

import './Sidemenu.css';

/** 配置 Sidemenu 的選項 */
interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home Screen',
    url: '/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: 'Book With Us',
    url: '/book-with-us',
    iosIcon: bookOutline,
    mdIcon: bookSharp,
  },
  {
    title: 'Log Out',
    url: '/logout',
    iosIcon: logOutOutline,
    mdIcon: logOutSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="main-list">
          <IonListHeader>Lush-Retreat</IonListHeader>
          {appPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem
                className={location.pathname === appPage.url ? 'selected' : ''}
                routerLink={appPage.url}
                routerDirection="none"
                lines="none"
                detail={false}
              >
                <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

