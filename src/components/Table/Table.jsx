import {
    Flex,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td
} from '@chakra-ui/react'
import { useContext } from 'react'
import GlobalContext from '../../context/Context';
import ButtonComponent from '../Button/ButtonComponent'

function TableComponent() {

    const { rows, setEditingBook } = useContext(GlobalContext);

    function handleSelect(id) {
        localStorage.setItem('book_id', id)
        setEditingBook(true);
        window.scrollTo({
            top: 100,
            behavior: 'smooth'
        })
    }

    function handleDelete(e) {
        console.log("Deletar livro");
    }
    return (
    <Flex>
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
                                onClick={(e) => {handleDelete(e)}}>Deletar</ButtonComponent>
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