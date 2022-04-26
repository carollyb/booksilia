import {
    Flex,
    Text,
    Button,
    InputGroup,
    Input,
    InputRightElement,
    useToast,
    FormControl,
    FormLabel,
    FormErrorMessage,

} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/Context'
import { useForm } from "react-hook-form";
import axios from 'axios'
import ContainerSection from '../components/Layouts/Container';
import BoxSection from '../components/Layouts/Box';
import InputComponent from '../components/Input/InputComponent';
import HeadingTitle from '../components/HeadingTitle/HeadingTitle';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    username: yup.string().required('O nome de usuário é obrigatório'),
    password: yup.string().required('A senha deve ser preenchida'),
}).required();

function LoginPage() {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema)
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const toast = useToast()
    const {
        url,
        setAuth } = useContext(GlobalContext)
    
    async function onSubmit(data) {
        try {
            const response = await axios.post(`${url}/login`, data);
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('name', response.data.name)
            localStorage.setItem('user_id', response.data.user_id)
            setAuth(true)
            const get_name = localStorage.getItem('name')
            const [ firstName, ] = get_name.split(" ")
            navigate('/home')
            toast({
                title: `Seja bem vindo, ${firstName}!`,
                description: `Você agora tem acesso a todas as funções do sistema`,
                status: 'success',
                duration: 3000,
                isClosable: true,
                });
        } catch (error) {
            toast({
                title: `Não pôde fazer login`,
                description: `Verifique seu username e senha!`,
                status: 'error',
                duration: 3000,
                isClosable: true,
                });
        }
        
    }

    return (
        <ContainerSection>
            <BoxSection>
                <HeadingTitle
                >Login</HeadingTitle>
                    <FormControl isInvalid={!!errors.username}>
                        <FormLabel>Username</FormLabel>
                        <Input
                        {...register("username")}
                        h={'47px'}
                        fontFamily={'sen'}
                        id='username'
                        type="text"
                        placeholder={'Insira o username'}
                        />
                        <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.password}>
                        <FormLabel>Senha</FormLabel>
                        <InputGroup>
                            <Input
                            {...register("password")}
                            h={'47px'}
                            fontFamily={'sen'}
                            id='password'
                            type={showPassword ? 'text' : 'password'}
                            placeholder={'Insira a senha'}
                            />
                            <InputRightElement h={'full'}>
                            <Button
                                variant={'ghost'}
                                onClick={() =>
                                    setShowPassword((showPassword) => !showPassword)
                                }>
                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>   
                        </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
                    </FormControl>
                    <Button
                    fontFamily={'sen'}
                    fontSize={'20px'}
                    backgroundColor={'purple'}
                    color={'white'}
                    type={'submit'}
                    onClick={handleSubmit(onSubmit)}>
                        Login
                    </Button>                
            </BoxSection>
        </ContainerSection>
    );
}

export default LoginPage;