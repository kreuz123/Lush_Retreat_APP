import { IonModal, IonButton } from '@ionic/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

const CalendarOverlay: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [date, setDate] = useState(new Date());

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <div style={{ padding: '20px' }}>
        <Calendar onChange={setDate} value={date} />
        <p>Selected Date: {date.toDateString()}</p>
        <IonButton onClick={onClose}>Close</IonButton>
      </div>
    </IonModal>
  );
};

export default CalendarOverlay;
