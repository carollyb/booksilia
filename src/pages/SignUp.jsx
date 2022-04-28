import {
    Text,
    useToast
} from '@chakra-ui/react';
import ContainerSection from '../components/Layouts/Container';
import BoxSection from '../components/Layouts/Box';
import InputComponent from '../components/Input/InputComponent';
import ButtonComponent from '../components/Button/ButtonComponent';
import HeadingTitle from '../components/HeadingTitle/HeadingTitle';
import { GlobalContext } from '../context/Context';
import { useContext } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom'

function SignUpPage() {

    const navigate = useNavigate()
    const toast = useToast();

    const {
        url,
        userSignUp,
        userSignUpData,
        setUsetSignUpData,
        setAuth
    } = useContext(GlobalContext)

    function handle(e) {
        const newValues = {...userSignUpData}
        newValues[e.target.id] = e.target.value;
        setUsetSignUpData(newValues)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            
        const response = await axios.post(`${url}/user`, userSignUpData);
        setUsetSignUpData(userSignUp)
        setAuth(true)
        console.log(response.data);
        toast({
            title: 'Conta criada!',
            description: `Seja bem vinda(o), ${response.data.user_created.fullName}`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
        navigate('/')
        } catch (error) {
            toast({
                title: 'A conta não pôde ser criada',
                description: `Preencha novamente os campos`,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    return (
        <ContainerSection>
            <BoxSection>
            <HeadingTitle
            >Cadastre-se</HeadingTitle>
            <Text
            fontFamily={'sen'}
            color={'lightGray'}
            fontSize={'16px'}
            >
                para ter acesso ao sistema
            </Text>
            <InputComponent
            values={userSignUpData.fullName}
            id='fullName'
            type="text"
            placeholder={'Nome e Sobrenome'}
            onChange={(e) => {handle(e)}}
            />
            <InputComponent
            values={userSignUpData.username}
            id='username'
            type="text"
            placeholder={'Username'}
            onChange={(e) => {handle(e)}}
            />
            <InputComponent            
            values={userSignUpData.password}
            id='password'
            type="password"
            placeholder={'Senha'}
            onChange={(e) => {handle(e)}}
            />
            <ButtonComponent
            backgroundColor={'purple'}
            color={'white'}
            onClick={(e) => {handleSubmit(e)}}
            >
                Sign Up
            </ButtonComponent>
            </BoxSection>
        </ContainerSection>
    );
}

export default SignUpPage;