import {
    Flex,
    Box,
    Text,
    Button
} from '@chakra-ui/react';
import Container from '../components/Layouts/Container';


function Home() {

    return (
        <Container>
        <Flex display="flex" alignItems="center">
            <Flex alignItems="center">
                <Box
                h={'350px'}
                w={'500px'}
                bg={'purple.100'}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                    <Text 
                    fontFamily={'sen'}
                    fontSize={'30px'}
                    color={'purple'}
                    fontWeight={'bold'}>
                        Bem-vindo,
                    </Text>
                    <Button
                backgroundColor={'purple'}
                color={'white'}
                onClick={(e) => {handleSubmit(e)}}>
                    Acessar o estoque
                </Button>
                </Box>
            </Flex>
            <Flex>
            <Box
                h={'350px'}
                w={'200px'}
                bg={'purple.100'}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                    <Button
                backgroundColor={'purple'}
                color={'white'}
                onClick={(e) => {handleSubmit(e)}}>
                    Atualizar Dados
                </Button>
                </Box>
            </Flex>
        </Flex>
        </Container>
    );
}

export default Home;