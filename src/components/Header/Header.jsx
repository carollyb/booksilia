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
import { useContext, useState } from 'react';
import { FaUser, FaSearch } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios"

function HeaderComponent() {
    const { url, isAuth, setAuth } = useContext(GlobalContext)

    const [ searchTitle, setSearchTitle ] = useState("")

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
            
        //navigate('/book')
        } catch (error) {
            
        }
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
                value={searchTitle}
                type={'text'}
                w={{base: '200px', md: '260px', lg: '582px'}}
                h={'47px'}
                boxShadow={'lg'}
                borderRadius={'10px'}
                fontFamily={'sen'}
                placeholder={'Procure por um título'}
                onChange={(e) => handle(e)}
                _focus={{
                    boxShadow: 'md',
                    border: 'solid',
                    borderColor: 'purple'
                }} />
                <InputRightElement h={'full'}>
                    <IconButton
                    onClick={(e) => handleClick(e)}
                    icon={<FaSearch color={'lightGray'} size='1em' />} />
                </InputRightElement>  
            </InputGroup>
            {isAuth ? 
            <Flex
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
            gap={'16px'}>
            <ButtonComponent 
            color={'purple'}
            onClick={() => navigate('/login')}>Login</ButtonComponent>
            <ButtonComponent
            color={'white'}
            backgroundColor={'purple'}
            onClick={() => navigate('signup')} >Sign Up</ButtonComponent></Flex>
            }
        </Flex>
    </>);
}

export default HeaderComponent;