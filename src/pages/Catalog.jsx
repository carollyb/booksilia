import { Flex } from "@chakra-ui/react"
import { useContext } from "react"
import ContainerSection from "../components/Layouts/Container";
import HeadingTitle from "../components/HeadingTitle/HeadingTitle";
import { GlobalContext } from "../context/Context"
import BookCard from "../components/BookCard/BookCard";

function CatalogPage() {

    const { rows, searchRows } = useContext(GlobalContext)
    return (
        <Flex
        m={{base: '10px', md: '70px', lg: '140px'}}
        direction={'column'}
        gap={'37px'}>
            {searchRows && 
            <Flex
            p={'20px'}
            border={'hidden'}
            borderRadius={'20px'}
            backgroundColor={'backgroundSection'}
            direction={'column'}
            gap={'37px'}>
                <HeadingTitle>
                    Resultados da Busca:
                </HeadingTitle>
                <Flex
                gap={'27px'}
                flexWrap={'wrap'}>
                    {searchRows.map((item,key) => {
                        return (
                            <BookCard
                        key={key}
                        title={item.title}
                        author={item.author}
                        price={item.price}></BookCard>
                        )
                    })}
                </Flex>
            </Flex>}
            
            <HeadingTitle>
                Nosso Catálogo
            </HeadingTitle>
            <Flex
            gap={'27px'}
            flexWrap={'wrap'}
            >
                {rows.map((item,key) => {
                    return (
                        <BookCard
                    key={key}
                    title={item.title}
                    author={item.author}
                    price={item.price}></BookCard>
                    )
                })}
                
            </Flex>
        </Flex>
    );
}

export default CatalogPage;