import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    const useToken = user => {

        useEffect(() => {
            const email = user?.email;
            const currentUser = { email: email }

            if (email) {
                fetch(`http://localhost:4000/user/${email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'Application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const accessToken = data.accessToken;

                        setToken(accessToken)
                    })
            }
        }, [user]);

        return { token };
    };


    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const addUserName = (userName) => {
        return updateProfile(auth.currentUser, {
            displayName: userName
        })
    }

    const loginUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const googleLogin = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setIsLoading(false);
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, [])


    const authInfo = {
        createUser,
        addUserName,
        loginUser,
        googleLogin,
        logOut,
        user,
        isLoading,
        useToken
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;