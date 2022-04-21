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

function TableComponent() {

    const { rows } = useContext(GlobalContext)
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
                        </Tr>
                    )
                })}
            </Tbody>
        </Table>
    </Flex>
    );
}

export default TableComponent;