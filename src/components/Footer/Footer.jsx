import { Box, Container, Stack, Text, Link, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function FooterComponent() {
    return (
        <>
            <Box
            p={{md: '30px'}}
                bg={useColorModeValue("pink.50","pink.900")}
                color={useColorModeValue("pink.700","pink.200")}>
                <Container as={Stack} maxW={'6x1'} py={10} color={'black'}>
                    <SimpleGrid
                        templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
                        spacing={8}>
                        <Stack spacing={6}>
                            <Box>
                                <Text
                                    fontFamily={'Pacifico, cursive'}
                                    color={'purple'}
                                    fontSize={'36px'}
                                    fontWeight={'bold'}>Booksilia</Text>
                            </Box>
                            <Box>
                                <Text fontFamily={'sen'}>
                                    A Booksilia é um website de sistema de livraria para controle do estoque.
                                </Text>
                            </Box>
                            <Text
                                fontFamily={'sen'}
                                fontSize={'15px'}
                                fontWeight={'bold'}>
                                Siga-nos
                            </Text>
                            <Stack direction={'row'} spacing={6}>
                                <Link href='#'>
                                    <FaInstagram />
                                </Link>
                                <Link href='#'>
                                    <FaTwitter />
                                </Link>
                                <Link href='#'>
                                    <FaLinkedin />
                                </Link>
                            </Stack>
                        </Stack>
                        <Stack
                            align={'flex-start'}
                            fontFamily={'sen'}>
                            <Text
                                fontWeight={'bold'}>Categorias</Text>
                            <Link href={'/book'}>Ação</Link>
                            <Link href={'/book'}>Aventura</Link>
                            <Link href={'/book'}>Comédia</Link>
                            <Link href={'/book'}>Crime</Link>
                            <Link href={'/book'}>Direito</Link>
                            <Link href={'/book'}>Drama</Link>
                        </Stack>
                        <Stack
                            align={'flex-start'}
                            fontFamily={'sen'}>
                            <Text
                                fontWeight={'bold'}>Categorias</Text>
                            <Link href={'/book'}>Fantasia</Link>
                            <Link href={'/book'}>Horror</Link>
                            <Link href={'/book'}>Mistério</Link>
                            <Link href={'/book'}>Profissional</Link>
                            <Link href={'/book'}>Romance</Link>
                            <Link href={'/book'}>TV - Adaptações</Link>
                        </Stack>
                        <Stack
                            align={'flex-start'}
                            fontFamily={'sen'}>
                            <Text
                                fontWeight={'bold'}>Links</Text>
                            <Link href={'/'}>Sobre</Link>
                            <Link href={'/book'}>Livros</Link>
                            <Link href={'/login'}>Login</Link>
                            <Link href={'/signup'}>Sign Up</Link>
                            <Link href={'#'}>FAQ</Link>
                        </Stack>
                        <Stack
                            align={'flex-start'}
                            fontFamily={'sen'}>
                            <Text 
                                fontWeight={'bold'}>Nossa Equipe</Text>
                            <Link href={'https://www.linkedin.com/in/carollybarbosa/'}>Carolly B.</Link>
                            <Link href={'https://www.linkedin.com/in/priscilarossetto/'}>Priscila R.</Link>
                            <Link href={'https://www.linkedin.com/in/artur-moretti-0653111a1/'}>Artur M.</Link>
                        </Stack>
                    </SimpleGrid>
                </Container>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}
                    color={'black'}
                    fontFamily={'sen'}>
                    <Text>© 2022 Booksilia - Web Dev FullStack - Resilia Educação</Text>
                    <Stack direction={'row'} spacing={6}>
                        <Text
                            fontSize={'sm'}
                            flexDirection='unset'>
                            Feito com ♡ pelo Grupo 5
                        </Text>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}

export default FooterComponent;