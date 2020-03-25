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
import { APP_NAME } from '../utils/constants'

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
            <p>{APP_NAME} est une plateforme Fondée par de jeunes Haïtiens en 2016, <br />
      dont l'objectif est d'informer ses abonnés en tout le temps, <br />
      dont son nom Haiti info Toutan,
      constituée de professionnels de l'information. <br />
      HIT se veut être un outil util pour ses lecteurs pour qui, <br />
      l'information  est d'une importance  capitale dans leur quotidien.</p>
            <p>Version 1.0</p>
            <p>Développé par <a href="https://jgb.solutions" style={{ color: '#ff9800', textDecoration: 'none', fontWeight: 'bold' }} target="_blank" rel="noopener noreferrer">JGB Solutions</a></p>
          </div>
        </div>
      </IonContent >
    </IonPage >
  )
}

export default About
