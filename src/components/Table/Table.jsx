import {
    Flex,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    useToast
} from '@chakra-ui/react'
import { useContext } from 'react'
import GlobalContext from '../../context/Context';
import ButtonComponent from '../Button/ButtonComponent';
import axios from 'axios'

function TableComponent() {

    const { url, rows, setEditingBook, setUpdateTable } = useContext(GlobalContext);
    const toast = useToast();

    function handleSelect(id) {
        localStorage.setItem('book_id', id)
        setEditingBook(true);
        window.scrollTo({
            top: 100,
            behavior: 'smooth'
        })
    }

    async function handleDelete(id) {
        let confirmation = window.confirm("Você realmente quer deletar este livro?")
        const token = localStorage.getItem('token')
        if(confirmation){
            try {
                let response = await axios.delete(`${url}/book/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                
                toast({
                title: `Livro deletado!`,
                description: `O registro foi deletado do banco de dados`,
                status: 'success',
                duration: 3000,
                isClosable: true,
                });
                setUpdateTable((x) => {return x + 1})
            } catch (error) {
                toast({
                    title: `Livro não pôde ser deletado!`,
                    description: `Cheque as informações e tente novamente`,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    });
            }
        }
    }
    return (
    <Flex
    p={'30px'}>
        <Table variant='striped' colorScheme='gray' >
            <Thead>
                <Tr>
                    <Th>ID</Th>
                    <Th>título</Th>
                    <Th>autor</Th>
                    <Th>idioma</Th>
                    <Th>nº de páginas</Th>
                    <Th>data de publicação</Th>
                    <Th>editora</Th>
                    <Th>preço (R$)</Th>
                    <Th>criado por</Th>
                    <Th>opções</Th>
                </Tr>
            </Thead>
            <Tbody>
                {rows.map((item, key) => {
                    return (
                        <Tr
                        key={key}>
                            <Td>{item.id}</Td>
                            <Td>{item.title}</Td>
                            <Td>{item.author}</Td>
                            <Td>{item.language}</Td>
                            <Td>{item.num_pages}</Td>
                            <Td>{item.publication_date}</Td>
                            <Td>{item.publisher}</Td>
                            <Td>{item.price}</Td>
                            <Td>{item.userId}</Td>
                            <Td>
                                <ButtonComponent
                                color={'white'}
                                backgroundColor={'purple'}
                                onClick={() => {handleSelect(item.id)}}>Editar</ButtonComponent>
                            </Td>
                            <Td>
                            <ButtonComponent
                                color={'white'}
                                backgroundColor={'darkRed'}
                                onClick={() => {handleDelete(item.id)}}>Deletar</ButtonComponent>
                            </Td>
                        </Tr>
                    )
                })}
            </Tbody>
        </Table>
    </Flex>
    );
}

export default TableComponent;