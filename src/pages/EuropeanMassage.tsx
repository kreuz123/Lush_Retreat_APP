import React, { useState } from 'react';
import { IonPage, IonContent, IonButton, IonText } from '@ionic/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // 引入樣式

const EuropeanMassage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonText>
          <h1>European Aromatherapy Meridian Massage</h1>
        </IonText>

        {/* Datepicker */}
        <div style={{ margin: '20px 0' }}>
          <h3>Select Date</h3>
          <Calendar onChange={handleDateChange} value={selectedDate} />
          {selectedDate && (
            <p>
              Selected Date: <strong>{selectedDate.toDateString()}</strong>
            </p>
          )}
        </div>

        {/* Time picker */}
        <div style={{ margin: '20px 0' }}>
          <h3>Select Time</h3>
          <select value={selectedTime || ''} onChange={handleTimeChange} style={{ padding: '10px', width: '100%' }}>
            <option value="" disabled>
              Select Time
            </option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
          </select>
          {selectedTime && (
            <p>
              Selected Time: <strong>{selectedTime}</strong>
            </p>
          )}
        </div>

        {/* 提交按鈕 */}
        <IonButton expand="block" disabled={!selectedDate || !selectedTime}>
          Register
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default EuropeanMassage;
