import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        {/* <div className='container'> */}
        {/* <IonButton color='secondary' shape='round'> */}
        {/* Next */}
        {/* <IonIcon slot='end' icon='arrow-forward-outline'></IonIcon> */}
        {/* </IonButton> */}
        {/* <IonButton color='secondary' shape='round'>Previous</IonButton> */}
        {/* </div> */}

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
