import initializeAuthentication from "../pages/LoginPage/Firebase/Firebase.init";
import {
    signOut,
    getAuth,
    getIdToken,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

/*== Initialize Firebase ==*/
initializeAuthentication()

const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const [isAdmin, setIsAdmin] = useState(false)
    const [token, setToken] = useState('')

    /* ======= google Login ======= */
    const loginWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                saveUserToDB(user.email, user.displayName, 'PUT')
                const destination = location.state?.from || '/';
                history.push(destination)
                setErrorMsg('')
            }).catch((error) => {
                const errorMessage = error.message;
                setErrorMsg(errorMessage);
            })
            .finally(() => setIsLoading(false));;
    }

    /*===== User Register ======= */
    const registerWithEmailandPassword = (email, password, name, history,) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setErrorMsg('');
                const newUser = { email, displayName: name }
                setUser(newUser)
                /*----save user to the Database ---*/
                saveUserToDB(email, name, 'POST')

                /*=== send name to firebase after creation ===*/
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/')
            })
            .catch((error) => {
                setErrorMsg(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    /*======= login withEmail and Password ========*/
    const loginWithEmailAndPassword = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location.state?.from || '/';
                history.replace(destination)
                setErrorMsg('')
            })
            .catch((error) => {
                setErrorMsg(error.message);
            })
            .finally(() => setIsLoading(false))
    }


    /*======== logout ================*/
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setErrorMsg('')
            })
            .catch((error) => {
                setErrorMsg(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    //*-----find admin----*//
    useEffect(() => {
        fetch(`https://desolate-ridge-72025.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setIsAdmin(data.admin))
    }, [user.email])


    /* =======Save user email and user name into DB===== */
    const saveUserToDB = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://desolate-ridge-72025.herokuapp.com/users', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })
    }

    /* ===== Observer user State ====== */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth])

    return {
        user,
        isAdmin,
        logOut,
        token,
        errorMsg,
        isLoading,
        loginWithGoogle,
        loginWithEmailAndPassword,
        registerWithEmailandPassword,
    }
};

export default useFirebase;