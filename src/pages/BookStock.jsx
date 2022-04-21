import {
    Text,
    Flex,
    useToast
} from "@chakra-ui/react"
import HeadingTitle from "../components/HeadingTitle/HeadingTitle";
import BoxSection from "../components/Layouts/Box";
import ContainerSection from "../components/Layouts/Container";
import InputComponent from "../components/Input/InputComponent";
import ButtonComponent from "../components/Button/ButtonComponent";
import TableComponent from "../components/Table/Table";
import { GlobalContext } from '../context/Context';
import { useContext } from 'react';
import axios from 'axios'

function BookStock() {

    const { book, bookData, setBookData, isEditing, setEditing, setUpdateTable } = useContext(GlobalContext);

    const toast = useToast();

    function handle(e) {
        const newValues = {...bookData}
        newValues[e.target.id] = e.target.value;
        setBookData(newValues)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const token = localStorage.getItem('token')
        try {
        const response = await axios.post('http://localhost:3001/book/', bookData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        toast({
            title: `Livro '${response.data.title}' cadastrado!`,
            description: `O registro foi criado no banco de dados`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
        setUpdateTable((x) => {return x + 1})
        setBookData(book)
        } catch (error) {
            toast({
                title: 'O registro não pôde ser criado',
                description: `Preencha novamente os campos`,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    return (
        <Flex
        direction={'column'}
        justify={'flex-start'}
        align={'center'}>
            <ContainerSection>
            <BoxSection>
                {isEditing ? <HeadingTitle
                >Edite um livro</HeadingTitle> : 
                <HeadingTitle
                >Cadastre um livro</HeadingTitle>}
                <Text
                fontFamily={'sen'}
                color={'lightGray'}
                marginBottom={'50px'}
                >
                    para registrar no banco de dados
                </Text>
                <InputComponent
                values={bookData.title}
                id='title'
                type='text'
                placeholder={'Título'}
                onChange={(e) => {handle(e)}} ></InputComponent>
                <InputComponent
                values={bookData.author}
                id='author'
                type='text'
                placeholder={'Autor'}
                onChange={(e) => {handle(e)}} ></InputComponent>
                <InputComponent
                values={bookData.language}
                id='language'
                type='text'
                placeholder={'Idioma'}
                onChange={(e) => {handle(e)}} ></InputComponent>
                <InputComponent
                values={bookData.num_pages}
                id='num_pages'
                type='number'
                placeholder={'Número de páginas'}
                onChange={(e) => {handle(e)}} ></InputComponent>
                <InputComponent
                values={bookData.publication_date}
                id='publication_date'
                type='text'
                placeholder={'Data de publicação'}
                onChange={(e) => {handle(e)}} ></InputComponent>
                <InputComponent
                values={bookData.publisher}
                id='publisher'
                type='text'
                placeholder={'Editora'}
                onChange={(e) => {handle(e)}} ></InputComponent>
                <InputComponent
                values={bookData.price}
                id='price'
                type='number'
                placeholder={'Preço'}
                onChange={(e) => {handle(e)}} ></InputComponent>
                <ButtonComponent
                color={'white'}
                backgroundColor={'purple'}
                onClick={(e) => {handleSubmit(e)}}
                >Registrar</ButtonComponent>
            </BoxSection>
        </ContainerSection>
        <TableComponent />
        </Flex>
    );
}

export default BookStock;