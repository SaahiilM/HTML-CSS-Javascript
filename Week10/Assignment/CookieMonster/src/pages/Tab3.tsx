import { IonContent, IonHeader, IonIcon, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { logoGithub, logoLinkedin, mailOpen } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size='large'>Contact Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem><IonIcon slot='start' icon={logoGithub} size='large'></IonIcon><a href='https://github.com/SaahiilM'>GITHUB</a></IonItem>
          <IonItem><IonIcon slot='start' icon={logoLinkedin} size='large'></IonIcon><a href='https://www.linkedin.com/in/saahiil-meswaanii-797385b8/'>LINKEDIN</a> </IonItem>
          <IonItem><IonIcon slot='start' icon={mailOpen} size='large'></IonIcon><a href='mailto:saahiilm@icloud.com'>EMAIL</a> </IonItem>
        </IonList>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
