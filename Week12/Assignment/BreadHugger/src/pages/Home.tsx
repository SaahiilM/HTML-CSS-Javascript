import { IonChip, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ActionSheet from '../components/ActionSheet';
import Counter from '../components/Counter';
import ExploreContainer from '../components/ExploreContainer';
import TextInput from '../components/TextInput';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className='text-align:center'>Welcome</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <Counter />
              <IonChip>
                <IonLabel color="Danger">Warning</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>

          <IonRow>
            <ActionSheet />
          </IonRow>
        </IonGrid>
        {/* <ExploreContainer /> */}
        <TextInput />

      </IonContent>
    </IonPage>
  );
};

export default Home;
