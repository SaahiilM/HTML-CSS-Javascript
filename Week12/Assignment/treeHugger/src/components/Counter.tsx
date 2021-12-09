import { IonButton, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { arrowBackCircle } from "ionicons/icons";
import { useState, useRef } from "react";

function Counter() {
    const [count, setCount] = useState(1)
    const countRef = useRef();

    return (
        <div className="countainer" style={count >= 5 ? { color: "green" } : { color: 'white' }}>
            <h2>{count}</h2>
            <IonButton expand="block" fill="solid" shape="round" color='success' onClick={() => setCount(count + 1)}>Increase Value</IonButton>
            <div>

                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton>
                        <IonIcon icon={arrowBackCircle} />
                    </IonFabButton>
                </IonFab>
            </div>
        </div>
    )
}

export default Counter