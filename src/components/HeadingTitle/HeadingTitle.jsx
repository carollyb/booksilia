import { Text } from '@chakra-ui/react';

function HeadingTitle({children}) {
    return (
        <Text
        fontFamily={'sen'}
        fontSize={'40px'}
        color={'purple'}
        fontWeight={'bold'}
        >{children}</Text>
    );
}

export default HeadingTitle;