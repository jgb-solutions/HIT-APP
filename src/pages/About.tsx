import React from 'react'
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>À Propos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="content" style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <div className="ion-text-center">
            <h3>Haïti Info Toutan</h3>
            <p>Version 1.0</p>
            <p>Développé par <a href="https://jgb.solutions" style={{ color: '#ff9800', textDecoration: 'none', fontWeight: 'bold' }} target="_blank" rel="noopener noreferrer">JGB Solutions</a></p>
          </div>
        </div>
      </IonContent >
    </IonPage >
  )
}

export default About
