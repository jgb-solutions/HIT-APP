import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterLink,
} from '@ionic/react'
import React from 'react'
import { withRouter } from 'react-router-dom'
import { newspaperOutline, informationOutline } from 'ionicons/icons'
import './Menu.css'

interface AppPage {
  url: string
  icon: string
  title: string
}

const appPages: AppPage[] = [
  {
    title: 'Haïti Info Toutan (HIT)',
    url: '/',
    icon: newspaperOutline,
  },
  {
    title: 'À Propos',
    url: '/about',
    icon: informationOutline,
  },
]


const Menu: React.FunctionComponent = () => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonMenuToggle autoHide={false}>
          <IonRouterLink routerLink="/">
            <img
              src="/assets/images/haiti-Info-Toutan-transparent.png"
              alt="Haiti Info Toutan Logo"
            />
          </IonRouterLink>
        </IonMenuToggle>
        <IonList id="News-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  // className={selectedPage === appPage.title ? 'selected' : ''}
                  routerLink={appPage.url}
                  routerDirection="none" detail={false}>
                  <IonIcon slot="start" icon={appPage.icon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            )
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default withRouter(Menu)
