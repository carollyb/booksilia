import {
    Flex,
    Text,
    Button
} from '@chakra-ui/react';
import { useContext } from 'react'
import { GlobalContext } from '../context/Context'
import axios from 'axios'
import ContainerSection from '../components/Layouts/Container';
import BoxSection from '../components/Layouts/Box';
import InputComponent from '../components/Input/InputComponent';

function LoginPage() {

    const { 
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
        const response = await axios.post('http://localhost:3001/login', userData);
        setUserData(user)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user_id', response.data.user_id)
        setAuth(true)
    }

    return (
        <ContainerSection>
            <BoxSection>
                <Text
                fontFamily={'sen'}
                fontSize={'40px'}
                color={'purple'}
                fontWeight={'bold'}
                >Login</Text>
                <InputComponent
                values={userData.username}
                id='username'
                type="text"
                placeholder={'Insira o username'}
                onChange={(e) => {handle(e)}} />
                <InputComponent
                values={userData.password}
                id='password'
                type="text"
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