import { useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import GlobalContext from "./Context";
import axios from 'axios'

export function GlobalProvider({children}){

    const url = 'https://api-bookstore-mod5.herokuapp.com';
    const { isOpen, onOpen, onClose } = useDisclosure();

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
    //mostrar tabela
    const [ searchRows, setSearchRows ] = useState([]);

    const [ updateTable, setUpdateTable ] = useState(0);

    const [ isLoading, setLoading ] = useState(false)

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
        setUpdateTable,
        searchRows, 
        setSearchRows,
        isLoading,
        setLoading,
        isOpen,
        onOpen,
        onClose
    }

    return (
    <GlobalContext.Provider value={context} >
        {children}
    </GlobalContext.Provider>)
}