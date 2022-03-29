import { Button } from 'bootstrap';
import React from 'react'
import styled from 'styled-components'
import firebase from "firebase/compat/app";

const Container = styled.div`
    display: grid;
    place-items: cemter;
    height: 100vh;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

function Login() {

    const signIn = () => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };

    return (
        <Container>
            <LoginContainer>
                <Button onClick={() => signIn}>Sign in with Google</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login