import {
    Center,
    Wrap,
    Avatar,
    Box,
    Flex,
    Text,
    Button,
    keyframes
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const user_fullName = localStorage.getItem('name');
    const [ name, ] = user_fullName.split(" ");
    const size = '96px';
    const color = 'teal';
    const pulseRing = keyframes`
    0% {
        transform: scale(0.33);
    }
        40%,
        50% {
    opacity: 0;
}
    100% {
    opacity: 0;
}`;

    const navigate = useNavigate()

    return (
        <>
        <Center py={6}>
            <Wrap spacing='10px' align='center'>
                <Box
                h={{ sm: '476px', md: '20rem' }}
                w={{ sm: '100%', md: '450px' }}
                direction={{ base: 'column', md: 'row' }}
                bg={'purple.100'}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}
                alignItems="center"
                >
                    <Text 
                    fontFamily={'sen'}
                    fontSize={'30px'}
                    color={'purple'}
                    fontWeight={'bold'}
                    paddingTop={20}>
                        Bem-vindo, {name}!
                    </Text>
                    <Button
                        fontFamily={'sen'}
                        backgroundColor={'purple'}
                        color={'white'}
                        onClick={() => navigate('/stock')}>
                            Acessar o estoque
                    </Button>
                </Box>
                <Box
                    h={{ sm: '350px', md: '20rem' }}
                    w={{ sm: '100%', md: '200px' }}
                    direction={{ base: 'column', md: 'row' }}
                    bg={'purple.100'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}>
                    {}
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        h="216px"
                        w="full"
                        overflow="hidden">
                        <Box
                            as="div"
                            position="relative"
                            w={size}
                            h={size}
                            _before={{
                                content: "''",
                                position: 'relative',
                                display: 'block',
                                width: '300%',
                                height: '300%',
                                boxSizing: 'border-box',
                                marginLeft: '-100%',
                                marginTop: '-100%',
                                borderRadius: '50%',
                                bgColor: color,
                                animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                            }}>
                                <Avatar
                                    src="https://i.pravatar.cc/300"
                                    size="full"
                                    position="absolute"
                                    top={0}/>
                                </Box>
                            </Flex>
                        <Button
                            fontFamily={'sen'}
                            backgroundColor={'purple'}
                            color={'white'}
                            onClick={() => navigate('/user')}
                            >
                            Atualizar Dados
                        </Button>
                    </Box>
                </Wrap>
            </Center>
        </>
    );
}

export default Home;