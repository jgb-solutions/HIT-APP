import React from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'

import './FourOrFour.css'
import { Link } from 'react-router-dom'

const FourOrFour: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Page non trouvée</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="content" style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <div className="ion-text-center">
            <h1>Erreur 404!</h1>
            <p>Page non trouvée. </p>
            <p>Retourner sur la page <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>d'accueil</Link>.</p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default FourOrFour
