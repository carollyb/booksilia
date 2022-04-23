import {
    Avatar,
    Flex,
    Box,
    Text,
    Button,
    keyframes
} from '@chakra-ui/react';
import Container from '../components/Layouts/Container';

function Home() {
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
}
    `;
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
                    <Flex
                    justifyContent="center"
                    alignItems="center"
                    h="216px"
                    w="full"
                    overflow="hidden">
                        {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
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