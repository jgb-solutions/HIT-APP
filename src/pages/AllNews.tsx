import React, { useEffect } from 'react'
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardSubtitle,
  IonCardHeader,
  IonCardTitle,
  IonLoading,
  IonGrid,
  IonRow,
  IonCol,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/react'

import './News.css'
import NewsInterface from '../interfaces/NewsInterface'
import useAllNews from '../hooks/useAllNews'
import SEO from '../components/SEO'

const AllNews: React.FC = () => {
  const ionInfiniteScrollRef = React.createRef<HTMLIonInfiniteScrollElement>()
  const { data, loading, error, hasMore, loadMore } = useAllNews()

  useEffect(() => {
    console.log(data)
  }, [data])

  if (data.length === 0) return <IonLoading
    isOpen={loading}
    message={`Patientez s'il vous plaît...`}
  />

  if (error) return <p>Error!</p>

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Haïti Info Toutan (HIT)</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow>
            {data.map((news: NewsInterface) => (
              <IonCol key={news.hash} size="12" sizeSm="4" sizeXl="3">
                <IonCard routerLink={`/n/${news.hash}`}>
                  {!!news.image_url && (<img src={news.image_url} alt={news.title} />)}
                  <IonCardHeader>
                    <IonCardSubtitle>{news.public_date}</IonCardSubtitle>
                    <IonCardTitle>{news.title}</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <IonInfiniteScroll
          threshold="100px"
          ref={ionInfiniteScrollRef}
          disabled={!hasMore}
          onIonInfinite={() => loadMore(() => {
            if (ionInfiniteScrollRef.current) {
              ionInfiniteScrollRef.current.complete()
            }
          })}>
          <IonInfiniteScrollContent
            loadingText="Loading More News...">
          </IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
      <SEO />
    </IonPage>
  )
}

export default AllNews
