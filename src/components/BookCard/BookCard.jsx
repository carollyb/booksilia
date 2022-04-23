import {
    Flex,
    Text,
    Image
} from "@chakra-ui/react";


function BookCard({title, author}) {
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
        </Flex>
    );
}

export default BookCard;