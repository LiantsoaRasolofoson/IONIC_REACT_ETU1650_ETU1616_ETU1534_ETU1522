import { IonContent, IonInput, IonItem, IonLabel, IonList } from '@ionic/react'
import React, { useEffect, useRef, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import V_vehicule from '../modele/V_avion';
import { Link } from 'react-router-dom';
import V_avion from '../modele/V_avion';

type Props = {}

const ListeAvion = (props: Props) => {

  const [avions, setAvions] = useState<V_avion[]>([]);

  const getAvions=()=>{
    fetch('https://webservice-production-33ea.up.railway.app/avions/listeAvions',{
      method : 'GET',
      headers : {'Content-Type' : 'application/json'},
    })
    .then(response => response.json())
    .then(data => {
      var v = JSON.stringify(data["data"]);
      var d = JSON.parse(v) as V_avion[];
      setAvions(d)
    }
    );
  }

  const history = useHistory();
  useEffect(() => {
      history.push('/listeAvion');
      getAvions();
  }, []);

  
  const getDetail = (idAvion: Number) =>{
    localStorage.setItem('idAvion', JSON.stringify(idAvion));
    let tok = localStorage.getItem("token");
    if( tok == null ){
        history.push("/login");
    }
    else{
        history.push("/details");
    }
  }

  return (
    <IonContent className="ion-padding">
        <h2>Liste des avions</h2>
        <IonList lines="full">
            <IonItem>
              <IonLabel>Id</IonLabel>
              <IonLabel>Nom</IonLabel>
              <IonLabel>Compagnie</IonLabel>
              <IonLabel></IonLabel>
            </IonItem>
          </IonList>
        {avions.map( (avion: V_avion,index=avion.idAvion)=>
          <IonList lines="full" key={index}>
            <IonItem>
              <IonLabel>{avion.idAvion}</IonLabel>
              <IonLabel>{avion.nomAvion}</IonLabel>
              <IonLabel>{avion.nomCompagnie}</IonLabel>
              <IonLabel>
                <Link to="#" onClick={()=> getDetail(avion.idAvion)}>Voir détail</Link>
              </IonLabel>
            </IonItem>
          </IonList>
        
        )}

    </IonContent>
  )
}

export default ListeAvion
