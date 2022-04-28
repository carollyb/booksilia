import {
    Flex,
    Text,
    Image
} from "@chakra-ui/react";
import { useState, useContext } from "react"
import ButtonComponent from "../Button/ButtonComponent";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import { BiBookOpen } from "react-icons/bi";
import { GlobalContext } from "../../context/Context";

function BookCard({title, author, price}) {

    const [ mouseOver, setMouseOver ] = useState(false);
    const { url } = useContext(GlobalContext)

    function handleGet(title) {
        console.log(title);
    }

    return (
        <Flex
        w={'262px'}
        h={'439px'}
        direction={'column'}
        justify={'space-between'}
        align={'center'}
        p={'20px'}
        border={'solid'}
        borderColor={'lightGray'}
        borderRadius={'20px'}
        _hover={{
            h: '499px',
            boxShadow: 'lg'
        }}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        >
            <Flex
            w={'220px'}
            h={'307px'}
            borderRadius={'20px'}
            overflow={'hidden'}>
                <Image
                objectFit={'cover'}
                src="https://img.freepik.com/free-psd/books-cover-mockup_145224-172.jpg" />
            </Flex>
            <Text
            fontFamily={'sen'}
            fontWeight={'bold'}
            fontSize={'20px'}
            textAlign={'center'}
            >{title}</Text>
            <Text
            fontFamily={'sen'}
            color={'lightGray'}
            textAlign={'center'}
            >
                {author}
            </Text>
            {mouseOver && <Flex
            direction={'column'}
            align={'center'}>
                <HeadingTitle
                >
                    R${price}
                </HeadingTitle>
                <ButtonComponent
                color={'white'}
                backgroundColor={'purple'}
                onClick={() => handleGet({title})}
                gap={'15px'}>
                    <BiBookOpen />
                    Acessar
                </ButtonComponent>
            </Flex> }
        </Flex>
    );
}

export default BookCard;