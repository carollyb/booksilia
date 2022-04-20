import { useState, useEffect } from "react";
import GlobalContext from "./Context"

export function GlobalProvider({children}){

    const book = {
        title: '',
        author: '',
        language: '',
        num_pages: 0,
        publication_date: new Date(),
        publisher: '',
        price: 0,
        userId: localStorage.getItem('user_id')
    }

    const [ bookData, setBookData ] = useState(book);

    const user = {
        username: '',
        password: ''
    }

    const [ userData, setUserData ] = useState(user)

    const [ isAuth, setAuth ] = useState(false)

    const context = {
        book,
        bookData,
        setBookData,
        userData,
        setUserData,
        user,
        isAuth,
        setAuth
    }

    return (
    <GlobalContext.Provider value={context} >
        {children}
    </GlobalContext.Provider>)
}