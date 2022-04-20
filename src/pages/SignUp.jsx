import {
    Text
} from '@chakra-ui/react';
import ContainerSection from '../components/Layouts/Container';
import BoxSection from '../components/Layouts/Box';
import InputComponent from '../components/Input/InputComponent';
import ButtonComponent from '../components/Button/ButtonComponent';

function SignUpPage() {
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
            id='fullName'
            type="text"
            placeholder={'Nome e Sobrenome'}
            />
            <InputComponent
            id='username'
            type="text"
            placeholder={'Username'}
            />
            <InputComponent
            id='password'
            type="password"
            placeholder={'Senha'}
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