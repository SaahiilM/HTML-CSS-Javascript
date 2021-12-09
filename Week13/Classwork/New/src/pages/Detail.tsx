import {
    IonButtons,
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { useParams } from 'react-router';
import './Detail.css';

const Detail: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
          <IonCard>
              <IonCardContent>
                  Hello, {name}.
              </IonCardContent>
          </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Detail;
