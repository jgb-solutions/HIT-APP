import React from 'react'

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardHeader,
  IonCardTitle,
  IonLoading,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react'

import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  TelegramIcon,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
} from 'react-share'

import useSingleNews from '../hooks/useSingleNews'
import { RouteComponentProps, Redirect } from 'react-router'
import NewsInterface from '../interfaces/NewsInterface'
import SEO from '../components/SEO'
import { TWITTER_HANDLE } from '../utils/constants'
import colors from '../utils/colors'

interface Props extends RouteComponentProps<{
  newsHash: string
}> { }

const SingleNews: React.FC<Props> = ({ match }) => {
  const { data, loading, error } = useSingleNews(match.params.newsHash)

  if (loading) return <IonLoading
    isOpen={loading}
    message={`Patientez s'il vous plaît...`}
  />

  if (error) return <Redirect to="/404" />

  const ShareButtons = () => {
    const url = window.location.href
    const title = `${data?.title} - Haïti Info Toutan (HIT)`
    const hashtags = `HIT HITNews news`

    return (
      <IonRow>
        <IonCol>
          <FacebookShareButton
            url={url}
            quote={title}
            hashtag={hashtags.split(' ').join(' #')}>
            <FacebookIcon size={48} style={{ borderRadius: 4, color: colors.facebook }} />
          </FacebookShareButton>
        </IonCol>
        <IonCol>
          <TwitterShareButton
            url={url}
            title={title}
            via={TWITTER_HANDLE}
            hashtags={hashtags.split(' ')}>
            <TwitterIcon size={48} style={{ borderRadius: 4, color: colors.twitter }} />
          </TwitterShareButton>
        </IonCol>
        <IonCol>
          <WhatsappShareButton url={url} title={title}>
            <WhatsappIcon size={48} style={{ borderRadius: 4, color: colors.whatsapp }} />
          </WhatsappShareButton>
        </IonCol>
        <IonCol>
          <TelegramShareButton url={url} title={title}>
            <TelegramIcon size={48} style={{ borderRadius: 4, color: colors.telegram }} />
          </TelegramShareButton>
        </IonCol>
      </IonRow>
    )
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{data?.title} - HIT</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol key={data?.hash} size="12" sizeSm="6">
              <IonCard>
                <img src={data?.image_url || 'https://files.infotoutan.com/images/03kpJg2M2zsaY3GmdRUn50OKQfua2p84ETrg2L3V.jpeg'} alt={data?.title} />
                <IonCardHeader>
                  <IonCardSubtitle>{data?.public_date}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <div dangerouslySetInnerHTML={{ __html: `${data?.body}` }} />
                </IonCardContent>
                {!!data?.ads && (
                  <IonCardHeader>
                    <IonCardSubtitle>
                      <div dangerouslySetInnerHTML={{ __html: `${data?.ads}` }} />
                    </IonCardSubtitle>
                  </IonCardHeader>
                )}

                <IonCardHeader>
                  <ShareButtons />
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>


          {data?.randoms ? (
            <>
              <h3 className="ion-padding-horizontal">Autres Nouvelles</h3>
              <IonRow>
                {data?.randoms.map((news: NewsInterface) => (
                  <IonCol key={news.hash} size="12" sizeSm="4" sizeXl="3">
                    <IonCard routerLink={`/n/${news.hash}`}>
                      <img src={news?.image_url || 'https://files.infotoutan.com/images/03kpJg2M2zsaY3GmdRUn50OKQfua2p84ETrg2L3V.jpeg'} alt={news?.title} />
                      <IonCardHeader>
                        <IonCardSubtitle>{news.public_date}</IonCardSubtitle>
                        <IonCardTitle>{news.title}</IonCardTitle>
                      </IonCardHeader>
                    </IonCard>
                  </IonCol>
                ))}
              </IonRow>
            </>
          ) : null}
        </IonGrid>
      </IonContent>

      <SEO
        title={`${data?.title}`}
        url={window.location.href}
        description={`${data?.body.split('\n')[0]}`}
        image={data?.image_url}
      />
    </IonPage>
  )
}

export default SingleNews
