import { useState, useEffect } from "react";
import GlobalContext from "./Context";
import axios from 'axios'

export function GlobalProvider({children}){

    const url = 'http://localhost:3001';

    //registro livro
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

    //login usuário
    const user = {
        username: '',
        password: ''
    }

    const [ userData, setUserData ] = useState(user)

    //cadastro usuário
    const userSignUp = {
        fullName: '',
        username: '',
        password: ''
    }
    
    const [ userSignUpData, setUsetSignUpData ] = useState(userSignUp)

    //checar autenticação
    const authStatus = localStorage.getItem('token')
    const [ isAuth, setAuth ] = useState(!!authStatus)

    //editar livro
    const [ isEditingBook, setEditingBook ] = useState(false);

    //mostrar tabela
    const [ rows, setRows ] = useState([]);

    const [ updateTable, setUpdateTable ] = useState(0)

const getData = async (url) => {
    try {
        const response = await axios.get(`${url}/book`);
        const results = response.data.books;
        setRows(results)
    } catch (error) {
        console.log(`${error.message}`);
    }
}

    useEffect(() => {
        getData(url)
    }, [updateTable])

    const context = {
        url,
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
        isEditingBook,
        setEditingBook,
        rows,
        setRows,
        updateTable,
        setUpdateTable
    }

    return (
    <GlobalContext.Provider value={context} >
        {children}
    </GlobalContext.Provider>)
}