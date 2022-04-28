import { Text } from '@chakra-ui/react';

function HeadingTitle({children}) {
    return (
        <Text
        fontFamily={'sen'}
        mt={{base: '50px', md: '0'}}
        fontSize={{base: '30px', md: '40px'}}
        color={'purple'}
        fontWeight={'bold'}
        >{children}</Text>
    );
}

export default HeadingTitle;