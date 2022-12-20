import { IonContent, IonLabel,IonButton } from '@ionic/react'
import React, { useEffect, useRef, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import V_assurance from '../modele/V_assurance';
import { Link } from 'react-router-dom';


type Props = {}

const ExpireDans1Mois = (props: Props) => {

  const history = useHistory();
  const getDetail = () =>{
    history.push("/listeAssurance");
  }

  return (
     <IonButton  type="button"  onClick={()=> getDetail()}>
        liste assurance expire dans 1 mois
     </IonButton>
     
  )
}

export default ExpireDans1Mois
