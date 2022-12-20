import {IonContent, IonCardTitle, IonCard, useIonViewWillEnter, IonList, IonItem, IonLabel} from '@ionic/react'
import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import internal from 'stream'
import Header from '../components/Header'
import { useHistory } from 'react-router';
import V_avion from '../modele/V_avion'



type Props = {
    id: String,
    immatriculation: String,
    nomMarque: String,
    date: String,
    debutKm: String,
    finKm: String
}

type Kilometrage = {
    idKilometrage: string,
    dateKm: string,
    debutKm: string,
    finKm: string,
    idAvion: number
}


const Details: React.FC = () => {
    const id = localStorage.getItem("idAvion");
    const token = localStorage.getItem("token");
    const [kilometrages, setKilometrages] = useState<Kilometrage[]>([]);
    const [avion, setAvion] = useState<V_avion>();

    const getVehicules=()=>{
        fetch("https://webservice-production-33ea.up.railway.app/avions/" + id +"?token=" + token)
        .then(response => response.json())
        .then(data => {
            const liste = JSON.stringify(data.kilometrage);
            const ve = JSON.parse(liste) as Kilometrage[];
            const avion = JSON.stringify(data.avion);
            const a = JSON.parse(avion) as V_avion;
            setKilometrages(ve);
            setAvion(a);
        });
      }
      
      const history = useHistory();
      useEffect(() => {
        history.push("/details");
           getVehicules();
      }, []);


    return(
        <IonContent className="ion-padding">
        
        
        <p>
            <b>Compagnie:</b> <IonLabel>{avion?.nomCompagnie}</IonLabel>
        </p>
        <p>
            <b>Nom:</b> <IonLabel>{avion?.nomAvion}</IonLabel>
        </p>


        <h2>Liste des kilométrage</h2>
        <IonList lines="full">
            <IonItem>
                <IonLabel>Date</IonLabel>
                <IonLabel>Début</IonLabel>
                <IonLabel>fin</IonLabel>
            </IonItem>
        </IonList>
            
        {
            kilometrages.map((kilometrage: Kilometrage,index) => 
            <IonList lines="full">
                <IonItem>
                    <IonLabel>{kilometrage.dateKm}</IonLabel>
                    <IonLabel>{kilometrage.debutKm} Km</IonLabel>
                    <IonLabel>{kilometrage.finKm} Km</IonLabel>
                </IonItem>
            </IonList>
            )
        }
        </IonContent>
    )
}
          
export default Details