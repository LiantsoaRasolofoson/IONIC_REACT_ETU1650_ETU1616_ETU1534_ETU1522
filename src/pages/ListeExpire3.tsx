import { IonContent, IonInput, IonItem, IonLabel, IonList } from '@ionic/react'
import React, { useEffect, useRef, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import V_vehicule from '../modele/V_avion';
import { Link } from 'react-router-dom';
import V_avion from '../modele/V_avion';
import V_assurance from '../modele/V_assurance';

type Props = {}

const ListeAssurance = (props: Props) => {

  const [assurances, setAssurance] = useState<V_assurance[]>([]);

  const getAssurance=()=>{
    fetch('https://webservice-production-33ea.up.railway.app/assurance/expire3',{
      method : 'GET',
      headers : {'Content-Type' : 'application/json'},
    })
    .then(response => response.json())
    .then(data => {
      var v = JSON.stringify(data["data"]);
      var d = JSON.parse(v) as V_assurance[];
      setAssurance(d)
    }
    );
  }
  const history = useHistory();
  useEffect(() => {
      history.push('/listeAssurance2');
      getAssurance();
  }, []);
  return (
    <IonContent className="ion-padding">
        <h2>Liste des Assurance expirer dans 3 mois</h2>
        <IonList lines="full">
            <IonItem>
              <IonLabel>Compagnie</IonLabel>
              <IonLabel>nomavion</IonLabel>
              <IonLabel>dateassurance</IonLabel>
              <IonLabel>dateexpiration</IonLabel>
            </IonItem>
          </IonList>
        {assurances.map( (assurance: V_assurance,index )=>
          <IonList lines="full">
            <IonItem>
              <IonLabel>{assurance.nomCompagnie}</IonLabel>
              <IonLabel>{assurance.nomAvion}</IonLabel>
              <IonLabel>{assurance.dateAssurance}</IonLabel>
             <IonLabel>{assurance.dateExpiration}</IonLabel>   
            </IonItem>
          </IonList>
        )}
    </IonContent>
  )
}
export default ListeAssurance
