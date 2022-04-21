import { useState, useEffect } from "react";
import GlobalContext from "./Context"

export function GlobalProvider({children}){

    const book = {
        title: '',
        author: '',
        language: '',
        num_pages: '',
        publication_date: '',
        publisher: '',
        price: '',
        userId: localStorage.getItem('user_id')
    }

    const [ bookData, setBookData ] = useState(book);

    const user = {
        username: '',
        password: ''
    }

    const [ userData, setUserData ] = useState(user)

    const userSignUp = {
        fullName: '',
        username: '',
        password: ''
    }
    
    const [ userSignUpData, setUsetSignUpData ] = useState(userSignUp)

    const [ isAuth, setAuth ] = useState(false)

    const [ isEditing, setEditing ] = useState(false)

    const context = {
        book,
        bookData,
        setBookData,
        userData,
        setUserData,
        user,
        isAuth,
        setAuth,
        userSignUp,
        userSignUpData,
        setUsetSignUpData,
        isEditing,
        setEditing
    }

    return (
    <GlobalContext.Provider value={context} >
        {children}
    </GlobalContext.Provider>)
}