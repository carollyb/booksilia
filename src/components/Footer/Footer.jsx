import { Box, Container, Stack, Flex, Text, Link, SimpleGrid } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';


function FooterComponent() {
    return (
    <>
        <Box
            bg="#fbd7b7b6"
            width="100%"
            height={'200px'}>
                <Container as={Stack} maxW={'6x1'} py={10}>
                    <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr'}}
                    spacing={8}>
                        <Stack spacing={6}>
                            <Box>
                            <Text
                            fontFamily={'Pacifico, cursive'}
                            color={'purple'}
                            fontSize={'36px'}
                            fontWeight={'bold'}>Booksilia</Text>
                            </Box>
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
                align={{ base: 'center', md: 'center' }}>
                    <Text>© 2022 Booksilia - Web Dev FullStack - Resilia Educação</Text>
                    <Stack direction={'row'} spacing={6}>
                        <Text fontSize={'sm'}
                            flexDirection='unset'>
                            Feito com ♡ pelo Grupo 5
                        </Text>
                    </Stack>
                    
            </Container>
        </Box>
    </>);
}

export default FooterComponent;