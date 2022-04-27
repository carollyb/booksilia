import {
    Flex,
    Button,
    InputGroup,
    InputRightElement,
    IconButton,
    Input,
    Text,
    useToast,
    useDisclosure
} from '@chakra-ui/react';
import ButtonComponent from '../Button/ButtonComponent';
import { GlobalContext } from '../../context/Context';
import { useContext, useState } from 'react';
import { FaUser, FaSearch } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios"

function HeaderComponent() {
    const { url, isAuth, setAuth, searchRows, setSearchRows } = useContext(GlobalContext)
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [ searchTitle, setSearchTitle ] = useState("");
    const toast = useToast();

    const navigate = useNavigate()

    function handleLogout() {
        setAuth(false)
        localStorage.removeItem('user_id');
        localStorage.removeItem('token');
    }

    function handle(e) {
        const titleValue = e.target.value
        setSearchTitle(titleValue)
    }

    async function handleClick(e) {
        e.preventDefault()
        try {
            const response = await axios.get(`${url}/book/${searchTitle}`)
            setSearchRows(response.data.results)
            navigate('/book')
            setSearchTitle("")
            
        } catch (error) {
            toast({
                title: 'Não encontramos este livro! :(',
                description: `Preencha novamente o título`,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    }
    return (
    <>
        <Flex
        m={{base: '10px', md: '10px 70px 10px 70px', lg: '0 120px 0 120px'}}
        h={{base: 'auto', lg: '125px'}}
        direction={{base: isOpen ? 'column' : 'row', md: 'row'}}
        justify={{base: 'flex-start', md: 'space-between'}}
        align={{base: 'flex-start', md: 'center'}}
        gap={{base: isOpen ? '20px': '40px', md: '10px'}}
        >
            <Flex
            gap={'30px'}>
                <IconButton
                    size={'lg'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ base: 'flex', md: 'none' }}
                    direction={'row'}
                    justify={'center'}
                    onClick={isOpen ? onClose : onOpen}
                    />
                <Link to="/"><Text
                fontFamily={'Pacifico, cursive'}
                color={'purple'}
                fontSize={'36px'}
                fontWeight={'bold'}>Booksilia</Text></Link>
            </Flex>

            <Flex
            p={isOpen ? '30px': '0px'}
            backgroundColor={isOpen ? 'backgroundSection': 'transparent'}
            border={'hidden'}
            borderRadius={isOpen ? '20px' : '0px'}
            m={{base: '10px', md: '10px 70px 10px 70px', lg: '0 120px 0 120px'}}
            h={{base: 'auto', lg: '125px'}}
            direction={{base: isOpen ? 'column' : 'row', md: 'row'}}
            justify={{base: 'flex-start', md: 'space-between'}}
            align={{base: 'flex-start', md: 'center'}}
            gap={{base: isOpen ? '20px': '40px', md: '10px'}}>
                <InputGroup
                display={{base: isOpen? 'flex' : 'none', md: 'flex'}}
                h={'47px'} 
                w={{base: '200px', md: '260px', lg: '582px'}}>
                <Input
                value={searchTitle}
                type={'text'}
                w={{base: '200px', md: '260px', lg: '582px'}}
                h={'47px'}
                boxShadow={'lg'}
                borderRadius={'10px'}
                fontFamily={'sen'}
                placeholder={'Busque um título'}
                onChange={(e) => handle(e)}
                _focus={{
                    boxShadow: 'md',
                    border: 'solid',
                    borderColor: 'purple'
                }} />
                <InputRightElement h={'full'}>
                    <IconButton
                    variant={'ghost'}
                    onClick={(e) => handleClick(e)}
                    icon={<FaSearch color={'lightGray'} size='1em' />} />
                </InputRightElement>  
                </InputGroup>
                {isAuth ? 
                <Flex
                display={{base: isOpen? 'flex' : 'none', md: 'flex'}}
                gap={'16px'}>
                <ButtonComponent
                color={'white'}
                backgroundColor={'purple'}
                onClick={() => navigate('/home')}>
                    <FaUser />
                </ButtonComponent>
                <ButtonComponent
                color={'purple'}
                backgroundColor={'lightGray'}
                onClick={handleLogout}>Logout</ButtonComponent>
                </Flex> : 
                <Flex
                display={{base: isOpen? 'flex' : 'none', md: 'flex'}}
                gap={'16px'}>
                <ButtonComponent
                color={'purple'}
                onClick={() => navigate('/login')}>Login</ButtonComponent>
                <ButtonComponent
                color={'white'}
                backgroundColor={'purple'}
                onClick={() => navigate('signup')} >Sign Up</ButtonComponent>
            </Flex>
            }
            </Flex>
            
        </Flex>
    </>);
}

export default HeaderComponent;