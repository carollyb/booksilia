import { Box, Flex, Text, Link, HStack } from '@chakra-ui/react';
import Container from '../Layouts/Container';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';


function FooterComponent() {
    return (
        <Container>
            <Box
                bg="#fbd7b7b6"
                width="100%"
                height={'300px'}
                justifyContent={"center"}
                alignItems="space-between"
                direction="column"
                padding={6}>
                <Text
                    fontFamily={'Pacifico, cursive'}
                    color={'purple'}
                    fontSize={'36px'}
                    fontWeight={'bold'}>Booksilia</Text>
                <Box>
                    <Flex gap={'10px'}>
                        <Link href='#'>
                            <FaInstagram />
                        </Link>
                        <Link href='#'>
                            <FaTwitter />
                        </Link>
                        <Link href='#'>
                            <FaLinkedin />
                        </Link>
                    </Flex>
                </Box>
                <Flex
                    justify={'center'}
                    textAlign={'center'}
                    flexDirection='flex-end'>
                    <HStack spacing={200}>
                        <Text fontSize={'sm'}
                            flexDirection='unset'>
                            © 2022 Booksilia - Web Dev FullStack - Resilia Educação
                        </Text>
                        <Text fontSize={'sm'}
                            flexDirection='unset'>
                            Feito com ♡ pelo Grupo 5
                        </Text>
                    </HStack>
                </Flex>
            </Box>
        </Container>
    );
}

export default FooterComponent;