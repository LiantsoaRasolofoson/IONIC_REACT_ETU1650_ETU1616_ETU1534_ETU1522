import { IonFooter, IonToolbar, IonTitle, IonApp } from '@ionic/react'
import React from 'react'
import '../assets/myappcss/Footer.css'
type Props = {}

const Footer = (props: Props) => {
  return (
    <IonFooter>
      <IonToolbar>
        <IonTitle className='footertext'>ETU2650-ETU1616-ETU1534-ETU1522</IonTitle>
      </IonToolbar>
    </IonFooter>
  )
}

export default Footer