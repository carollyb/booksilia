import {
    Flex,
    Text,
    Button,
    useToast
} from '@chakra-ui/react';
import { useContext } from 'react'
import { GlobalContext } from '../context/Context'
import axios from 'axios'
import ContainerSection from '../components/Layouts/Container';
import BoxSection from '../components/Layouts/Box';
import InputComponent from '../components/Input/InputComponent';
import HeadingTitle from '../components/HeadingTitle/HeadingTitle';

function LoginPage() {

    const toast = useToast()
    const {
        url,
        userData,
        setUserData,
        user,
        setAuth } = useContext(GlobalContext)
    
    function handle(e) {
        const newValues = {...userData}
        newValues[e.target.id] = e.target.value;
        setUserData(newValues)
    }
    
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await axios.post(`${url}/login`, userData);
        setUserData(user)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('name', response.data.name)
        localStorage.setItem('user_id', response.data.user_id)
        setAuth(true)
        const get_name = localStorage.getItem('name')
        const [ firstName, ] = get_name.split(" ")
        toast({
            title: `Seja bem vindo, ${firstName}!`,
            description: `Você agora tem acesso a todas as funções do sistema`,
            status: 'success',
            duration: 3000,
            isClosable: true,
            });
    }

    return (
        <ContainerSection>
            <BoxSection>
                <HeadingTitle
                fontFamily={'sen'}
                fontSize={'40px'}
                color={'purple'}
                fontWeight={'bold'}
                >Login</HeadingTitle>
                <InputComponent
                values={userData.username}
                id='username'
                type="text"
                placeholder={'Insira o username'}
                onChange={(e) => {handle(e)}} />
                <InputComponent
                values={userData.password}
                id='password'
                type="password"
                placeholder={'Insira a senha'}
                onChange={(e) => {handle(e)}} />
                <Button
                backgroundColor={'purple'}
                color={'white'}
                onClick={(e) => {handleSubmit(e)}}>
                    Login
                </Button>
            </BoxSection>
        </ContainerSection>
    );
}

export default LoginPage;