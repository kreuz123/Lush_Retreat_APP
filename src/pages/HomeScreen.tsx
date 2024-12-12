import { IonPage, IonContent, IonText, IonButton } from '@ionic/react';
import { useState } from 'react';
import CalendarOverlay from '../components/CalendarOverlay';

const HomeScreen: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonText>
          <h1>Welcome [User Name]!</h1>
          <p>Upcoming: Massage on Dec. 18th at 10 a.m.</p>
        </IonText>
        <IonButton expand="block" onClick={() => setShowCalendar(true)}>Open Calendar</IonButton>
        <CalendarOverlay
          isOpen={showCalendar}
          onClose={() => setShowCalendar(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default HomeScreen;
