import { IonCard, IonCardTitle, IonContent, IonFab, IonFabButton, IonIcon, IonItem, useIonActionSheet } from '@ionic/react'
import { useState } from 'react'
import { arrowBackCircle, handRight } from 'ionicons/icons';

function ActionSheet() {
    const [present, dismiss] = useIonActionSheet()
    return (
        <IonItem>
            <IonCard button={true} onClick={() => present({ buttons: [{ text: 'ALright' }, { text: 'Cancel' }], header: 'Action Sheet' })}>
                <img src='https://it.sheridancollege.ca/news/what-the-tech-fall16/images/do-not-click.png'></img>
                <IonCardTitle>
                    <IonIcon icon={handRight}></IonIcon>
                    Please do Click</IonCardTitle>

            </IonCard>

        </IonItem>
    )
}
export default ActionSheet