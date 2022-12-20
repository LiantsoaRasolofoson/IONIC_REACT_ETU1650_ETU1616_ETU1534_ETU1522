import { DatetimeCustomEvent, IonButton, IonCheckbox, IonInput, IonItem, IonLabel, useIonAlert } from '@ionic/react'
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router';
import '../assets/myappcss/Form.css';
type Props = {}

const Form = (props: Props) => {


    const history = useHistory();
    
    type Token = {
        idToken: number,
        idUtilisateur: number,
        tokenValues: string,
        dateExpiration: DatetimeCustomEvent
    }

    var usernameRef = useRef<HTMLIonInputElement>(null);
    var passwordRef = useRef<HTMLIonInputElement>(null);
    const [presentAlert] = useIonAlert();

    function authentificate() {

        var username = usernameRef.current?.value;
        var password = passwordRef.current?.value;
        var user = {
            "logins" : username,
            "motDePasse" : password
        };

        fetch('https://webservice-production-33ea.up.railway.app/user/login',{
            method : 'POST',
            body : JSON.stringify(user),
            headers : {'Content-Type' : 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
                var error = data.error;
                if( error == null ){
                    const t1 = JSON.stringify(data.token);
                    const t = JSON.parse(t1) as Token;
                    localStorage.setItem("token",t.tokenValues);
                    history.push('/details');
                }
                else{
                    presentAlert({
                        header: 'Code : '+error.code,
                        message: 'Message : '+error.message,
                        buttons: ['OK'],
                    })
                }
            }
        );
    }

    return (
        <form className="ion-padding myform">
            <IonLabel className='formtitle'>Login</IonLabel>
            <IonItem className='inputitem'>
                <IonLabel position="floating">Username</IonLabel>
                <IonInput value="Liantsoa01" ref={usernameRef} />
            </IonItem>
            <IonItem className='inputitem'>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput value="0123" ref={passwordRef} type="password" />
            </IonItem>
            <IonButton className="ion-margin-top inputitem" type="button" expand="block" onClick={authentificate}>
                Login
            </IonButton>
        </form>
    )
}

export default Form