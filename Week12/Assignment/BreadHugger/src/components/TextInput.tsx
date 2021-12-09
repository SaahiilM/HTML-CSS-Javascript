import { IonInput, IonItem, IonLabel } from "@ionic/react";
import { useState } from "react";
import { IonModal, IonButton, IonContent } from '@ionic/react';


function TextInput() {

    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState<string>()

    return (
        <IonContent>
            <IonItem>
                <IonLabel position="floating"><h1>Name</h1></IonLabel>
                <IonInput value={text} onIonChange={e => setText(e.detail.value!)}></IonInput>
            </IonItem>
            <IonModal isOpen={showModal} cssClass='my-custom-class'>
                <p>Hello {text} You successfully opened a modal</p>
                <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
            </IonModal>
            <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
        </IonContent>
    );

}

export default TextInput


