import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel } from '@ionic/react'
import { Link } from 'react-router-dom';

type Props = {}

const Menu = (props: Props) => {
    return (
        <IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <p>
                    <IonLabel>
                        <a href="/listeAvion">Liste avions</a>
                    </IonLabel>
                </p>
                <p>
                    <IonLabel>
                        <a href="/listeAssurance">Liste assurance 1 mois </a> 
                    </IonLabel>
                </p>
                <p>
                    <IonLabel>
                        <a href="/listeAssurance2">Liste assurance 3 mois</a>
                    </IonLabel>
                </p>
                
            </IonContent>
        </IonMenu>
    )
}

export default Menu