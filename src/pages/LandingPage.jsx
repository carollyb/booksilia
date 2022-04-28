import Carousels from "../components/Carousels/Carousels"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {
    Button,
    Text,
    Flex,
    InputGroup,
    Input,
    InputRightElement
} from '@chakra-ui/react';
import HeadingTitle from "../components/HeadingTitle/HeadingTitle";
import { FaUsers, FaBookOpen } from "react-icons/fa";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/Context";
import ContainerSection from "../components/Layouts/Container";
import vector from "../assets/images/vetores.png";

function LandingPage() {
    const { url } = useContext(GlobalContext)
    const [ numUsers, setNumUsers ] = useState(0)
    const [ numBooks, setNumBooks ] = useState(0)

    async function usersQtd() {
        let users = await axios.get(`${url}/user`)
        setNumUsers(users.data.results.length);
    }

    async function booksQtd() {
        let books = await axios.get(`${url}/book`)
        setNumBooks(books.data.books.length);
    }
    
    useEffect(() => {
        usersQtd()
        booksQtd()
    }, [])
    
    return (
        
        <Flex
        w={'auto'}
        direction={'column'}
        align={'center'}>
            <Carousels/>
            <Flex
            backgroundColor={'backgroundSection'}
            p={'10% 20% 10% 20%'}
            direction={'column'}
            align={'center'}>
                <HeadingTitle>Sobre</HeadingTitle>
                <Text color={'gray.500'} align={'center'} fontFamily={"sen"} fontSize={'20px'} >
                Somos uma livraria independente que aprecia diversos mundos, histórias e aprendizados através da leitura. <br /><br />
                Formar leitores e desenvolver o hábito da leitura são as razões de existir da Booksilia. <br /><br />
                Ao mesmo tempo, formamos um público que utiliza a leitura e o pensamento crítico como ferramenta de transformação pessoal e social
                </Text>
            </Flex>

            <Flex
            direction={{base: 'column', md: 'row'}}
            p={'70px'}
            gap={'50px'}
            >
                <Flex
                direction={'column'}
                align={'center'}
                >
                    <FaUsers
                    color={'#FFAB7C'} size={'4em'}/>
                    <Text
                    fontFamily={'sen'}
                    fontWeight={'bold'}
                    fontSize={'40px'}
                    >{numUsers}</Text>
                    <Text
                    fontFamily={'sen'}
                    fontWeight={'bold'}
                    fontSize={'20px'}
                    >Usuários cadastrados</Text>
                </Flex>
                <Flex
                direction={'column'}
                align={'center'}
                >
                    <FaBookOpen
                    color={'#FFAB7C'} size={'4em'}/>
                    <Text
                    fontFamily={'sen'}
                    fontWeight={'bold'}
                    fontSize={'40px'}
                    >{numBooks}</Text>
                    <Text
                    fontFamily={'sen'}
                    fontWeight={'bold'}
                    fontSize={'20px'}
                    >Livros cadastrados</Text>
                </Flex>
            </Flex>
            <Flex
            p={{base: '10px', md: '70px', lg: '140px'}}
            direction={'row'}
            justify={'center'}
            backgroundColor={'backgroundSection'}>
                <Flex
                direction={'column'}
                align={'center'}
                gap={'40px'}
                backgroundImage={vector}
                backgroundColor={'coral'}
                border={'hidden'}
                borderRadius={'20px'}
                p={{base: '30px', md: '80px', lg: '80px 400px 80px 400px'}}
                >
                    <Text
                    fontFamily={'sen'}
                    fontSize={{base: '20px', md: '40px'}}
                    fontWeight={'bold'}
                    color={'white'}
                    textAlign={'center'}
                    >Cadastre-se na nossa newsletter para receber novidades sobre livros</Text>
                    <Flex
                    color={'white'}>
                        <InputGroup
                        w={{base: '150px', md: '500px'}}
                        >
                            <Input
                            placeholder="Insira seu e-mail"
                            />
                            <InputRightElement
                            w={'20%'}>
                                <Button
                                backgroundColor={'purple'}
                                onClick={() => {console.log('Esse botão ainda não está funcionando :c');}}>
                                Cadastre-se
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
        
    );
}

export default LandingPage;