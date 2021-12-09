import { IonApp, IonCard, IonCardTitle, IonChip, IonCol, IonContent, IonGrid, IonLabel, IonPage, IonRow } from '@ionic/react';
import ActionSheet from './ActionSheet';
import Counter from './Counter';
import './ExploreContainer.css';
import TextInput from './TextInput';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">

      <IonGrid>
        <IonCard>
          <IonCardTitle>
            <TextInput />
          </IonCardTitle>
        </IonCard>
        <IonRow>
          <IonCol>
            <Counter />
          </IonCol>
          <IonChip>
            <IonLabel color="Warning">Warning</IonLabel>
          </IonChip>
        </IonRow>

        <IonRow>
          <ActionSheet />
        </IonRow>
      </IonGrid>

    </div>
  );
};

export default ExploreContainer;
