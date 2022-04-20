import {
    Text
} from '@chakra-ui/react';
import ContainerSection from '../components/Layouts/Container';
import BoxSection from '../components/Layouts/Box';
import InputComponent from '../components/Input/InputComponent';
import ButtonComponent from '../components/Button/ButtonComponent';
import { GlobalContext } from '../context/Context';
import { useContext } from 'react'

function SignUpPage() {

    const {
        userSignUp,
        userSignUpData,
        setUsetSignUpData
    } = useContext(GlobalContext)

    function handle(e) {
        const newValues = {...userSignUpData}
        newValues[e.target.id] = e.target.value;
        setUsetSignUpData(newValues)
    }

    return (
        <ContainerSection>
            <BoxSection>
            <Text
            fontFamily={'sen'}
            fontSize={'40px'}
            color={'purple'}
            fontWeight={'bold'}
            >Cadastre-se</Text>
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