import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonText } from '@ionic/react';
import './WelcomeScreen.css';

const WelcomeScreen: React.FC = () => (
  <IonPage>
    {/* 頁面標頭 */}
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Welcome</IonTitle>
      </IonToolbar>
    </IonHeader>

    {/* 頁面內容 */}
    <IonContent className="ion-padding">
      <IonText>
        <h1>Welcome to Lush Re-Treat</h1>
        <h2>Your path to a healthier life begins here.</h2>
      </IonText>
      {/* 按鈕 */}
      <IonButton routerLink="/home" expand="block" color="primary">
        Sign In
      </IonButton>
      <IonButton routerLink="/register" expand="block" color="secondary">
        Create Account
      </IonButton>
    </IonContent>
  </IonPage>
);

export default WelcomeScreen;

