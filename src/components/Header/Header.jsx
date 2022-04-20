import {
    Flex,
    Button,
    InputGroup,
    InputRightElement,
    IconButton,
    Input,
    Text
} from '@chakra-ui/react';
import ButtonComponent from '../Button/ButtonComponent';
import { GlobalContext } from '../../context/Context';
import { useContext } from 'react';
import { FaUser, FaSearch } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom'

function HeaderComponent() {
    const { isAuth, setAuth } = useContext(GlobalContext)
    const navigate = useNavigate()
    function handleLogout() {
        setAuth(false)
        localStorage.removeItem('user_id');
        localStorage.removeItem('token');
    }
    return (
    <>
        <Flex
        m={{base: '2px', md: '0 70px 0 70px', lg: '0 140px 0 140px'}}
        h={'125px'}
        justify={'space-between'}
        align={'center'}>
            <Link to="/"><Text
            fontFamily={'Pacifico, cursive'}
            color={'purple'}
            fontSize={'36px'}
            fontWeight={'bold'}>Booksilia</Text></Link>
            
            <InputGroup h={'47px'} w={{base: '200px', md: '260px', lg: '582px'}}>
                <Input
                type={'text'}
                w={{base: '200px', md: '260px', lg: '582px'}}
                h={'47px'}
                boxShadow={'lg'}
                borderRadius={'10px'}
                fontFamily={'sen'}
                placeholder={'Procure por um título'}
                _focus={{
                    boxShadow: 'md',
                    border: 'solid',
                    borderColor: 'purple'
                }} />
                <InputRightElement m={'2px 2px auto auto'} size={'md'}>
                    <IconButton
                    onClick={() => navigate('/book')}
                    m={'2px 2px auto auto'} size={'md'}
                    icon={<FaSearch color={'lightGray'} size='1.5em' />} />
                </InputRightElement>  
            </InputGroup>
            {isAuth ? 
            <Flex
            gap={'16px'}>
            <ButtonComponent>Login</ButtonComponent>
            <ButtonComponent
            color={'lightGray'}
            backgroundColor={'purple'}>Sign Up</ButtonComponent></Flex> : <Flex
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
            </Flex>
            }
        </Flex>
    </>);
}

export default HeaderComponent;