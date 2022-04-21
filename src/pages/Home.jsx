import {
    Box,
    Center,
    Text,
} from '@chakra-ui/react';

function Home() {
    return (
        <Center py={6}>
            <Box
            maxW={'445px'}
            h={'210px'}
            w={'full'}
            bg={'purple.100'}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
                
                <Text color={'gray.500'}>
                    Bem-vindo
                </Text>
            </Box>
        </Center>
    );
}

export default Home;